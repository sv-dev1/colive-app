import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { NavParams} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopoverController } from '@ionic/angular'; 
import { NavController,AlertController,ModalController,LoadingController ,ActionSheetController} from '@ionic/angular';  
import { File ,IWriteOptions} from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

//import domtoimage from 'dom-to-image';

declare var jsPDF: any;

@Component({
  selector: 'app-group-detail-page',
  templateUrl: './group-detail-page.page.html',
  styleUrls: ['./group-detail-page.page.scss'],
})
export class GroupDetailPagePage implements OnInit {


 nickname = '';
 submitted = false;
//  private socket;
  base_url : string = "";
  ref_link : string = "";
  teamId : string = "";
  owner : string = "";
  userId : string = "";
  ref_code : string = "";
  loggedInUsername : string = "";
  refferal : string = "";
  socket_url : string = "";
  web_url:string="";
  teamListArr :any = [];
  origionalListArr :any = [];
  userListArr :any = [];
  teamUserArr :any = [];
  userArr :any = [];
  pdfListArr:any=[];
  private  teamList: any[];
  private  teamFilteredList: any[];  
  update_from: FormGroup;
  myRand: number;
  image_base_url : string = "";
  image_url : string = "";
  userImg:any=[];
  ImageObj: any = [];
  imageBase;
  file_path : string = "assets/images/Logo-colive.png"; 
  loading: any;
  imageData:any;

  constructor(
    private route: ActivatedRoute,public popoverController: PopoverController,
    private clipboard: Clipboard,
    private router: Router, public formBuilder: FormBuilder, 
    private http: HttpClient,
    private socialSharing: SocialSharing,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public viewCtrl: ModalController,
    private file: File,
    private base64: Base64,
    private fileOpener: FileOpener,
    ) {
          this.image_base_url = environment.image_base_url;  
          this.web_url =environment.website_url;
          this.userId = sessionStorage.getItem("loggedInId");
          this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
          this.ref_code = sessionStorage.getItem("ref_code");
          this.refferal = this.web_url+'app.download?rc='+this.ref_code; 
          this.base_url = environment.base_url;
          this.socket_url = environment.socket_url; 

          this.route.queryParams.subscribe(params => { 
              this.teamId = params['teamId'];
              this.owner = params['owner'];
              this.nickname = params['nickname'];  
          });   
          this.ref_link = this.web_url+'app.download?rc='+this.ref_code+ '/'+this.teamId;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getTeamsList(); 
    this.getPdfUserList();
  }
  
  joinChat() {  
     this.router.navigate(['/chatroom'],{queryParams:{'teamId':this.teamId,'nickname':this.nickname,'owner':this.userId}});
  }

  get f() { return this.update_from.controls; } 

  async confirmDelete(id,msg) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
               this.removeUserCall(id);
          }
        }  
      ]
    });

    await alert.present();
  }

  removeUserCall(userId_to_remove) {
    if(userId_to_remove && this.teamId){
    const sent_data = {
        'userId': userId_to_remove,
        'team_id': this.teamId,
        'user_status': '2',
      };
      console.log(sent_data);
        let token; 
        if(sessionStorage.getItem("auth_token")!=undefined){
           token = sessionStorage.getItem("auth_token"); 
        }
        this.presentLoading();
        const httpOptions = { headers: new HttpHeaders({'authorization': token })};
        this.http.post(this.base_url+'/team/user/remove',sent_data,httpOptions).subscribe((response:any) => {
            this.customsmessage(response.message);
            this.popoverController.dismiss();
        },error=>{  
            console.log(error.error); 
            console.log(error.error.errors); 
        });  

    }
    else
    {
      let msg = 'user detail is not avaliable!';
      console.log(msg);
    }

  }
 removeUserApi(userId_to_remove,obj) {
    if(obj == 'remove'){
          this.confirmDelete(userId_to_remove,'You really want to remove user from the  group?');
     }
    if(obj == 'left'){
          this.confirmDelete(userId_to_remove,'You really want to leave from the  group?');
     }
  }

  update(form) {
  //    console.log(form);
      this.submitted = true; 
    if (this.update_from.invalid) {
  //    console.log('invalid');
      return;
    }
    else{
      const input_data = 
      { 
      "name" : form.title,
      "userId" : form.owner,     
      "teamId" : form.teamId,     
      }   
   //   this.pleaseWait(); 
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'updateTeam',input_data,httpOptions).subscribe((response:any) => {
     //this.loadingController.dismiss().then(a => console.log('dismissed'));
   //   console.log(response); 
      this.customsmessage(response.message);
      },error=>{  
 //     console.log(error.error); 
  //    console.log(error.error.errors); 
      });  
    }
  }    
  
  shareInfo(){
  this.socialSharing.share("Your referal link is:", "Invite", "", this.ref_link);
  } 
  joinGroupShare(){
       this.socialSharing.share("", "Invite", "", this.teamId);
  } 

  copyText(event) {
     this.clipboard.copy(this.ref_link);
     this.customsmessage('link has been successfully copied...');
  }

  copyTextCode(event) {
     this.clipboard.copy(event);
     this.customsmessage('Group code has been successfully copied...');
  }  
 

  
  async presentLoading() { 
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async customsmessage(msg) { 
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading1',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


 getTeamsList() : void {
   // console.log('All teams gets list out under this function'); 
    let sendlist=[];
     sendlist.push(this.teamId);
     const input_data = {'teamId': sendlist}; 

    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);

    this.http.post('https://txweb.kindlebit.com/team/users',input_data, { headers: headers }).subscribe((response: any) => { 
        this.teamListArr = response.teams; 
        this.userArr = response.teams; 
  //    console.log(response.teams);
      for(var i=0;i < this.teamListArr.length;i++){
        if(this.teamListArr[i]['userProfile'] != null){
        this.teamUserArr.push(this.teamListArr[i]['userProfile']);
        this.teamUserArr.push(this.teamListArr[i]['teams']);
        this.teamUserArr.push(this.teamListArr[i]['login']);
       }
      }
    //  console.log(this.teamUserArr);
         this.loadingController.dismiss();
      },error=>{ })    
  }

   public getBase64Image(imgUrl) {
          return new Promise(
                    function(resolve, reject) {

                      var img = new Image();
                      img.src = imgUrl;
                      img.setAttribute('crossOrigin', 'anonymous');
                        console.log(img);

                       img.onload = function () { 
                        var canvas = document.createElement("canvas");
                           // console.log("image");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0);
                            var dataURL = canvas.toDataURL("image/png");
                            return dataURL;
                      };


                      img.onerror = function() {
                        reject("The image could not be loaded.");
                      }
                  });
  }




  getPdfUserList(){
      let sendlist=[];
      sendlist.push(this.teamId);
      const input_data = {'teamId': sendlist}; 

        let token; 
        if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
        }
        this.presentLoading();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);

        this.http.post('https://txweb.kindlebit.com/team/users/pdf',input_data, { headers: headers }).subscribe((response: any) => { 
            this.pdfListArr = response.teams; 
            this.userArr = response.teams; 
             this.loadingController.dismiss();
          },error=>{ })    
  }

  convertToDataURLviaCanvas(url, outputFormat){
    return new Promise( (resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function(){
        let canvas = <HTMLCanvasElement> document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
      //  this.imageData=dataURL;
      //          console.log(this.imageData);

        canvas = null;
        resolve(dataURL); 
      };
      img.src = url;
    });
  }
  
  downloadPDF() {
      if(this.teamListArr.length != 0){
        var doc = new jsPDF();
        var col = ["Fields", "Inputs"];
        var rows = [];
        var rows1 = [];
        var temp=[];
        var a = 11;

        / The following array of object as response from the API req /
        // console.log( this.teamListArr[0].userProfile);
        this.pdfListArr.forEach(element => {
        if(element.userProfile)
          {
              temp = ["Name",element.userProfile.firstName];
                rows.push(temp);
              temp = ["Surname",element.userProfile.lastName];
                rows.push(temp);
              temp = ["Email",element.userProfile.email];
                rows.push(temp);
              temp = ["Nationality",element.userProfile.nationality];
                rows.push(temp);
              if(element.userProfile.dob == 'Invalid date'){
                    temp = ["Date Of Birth"," "];
                     rows.push(temp);
              }
              else{
              temp = ["Date Of Birth",element.userProfile.dob];
                rows.push(temp);
              }
              temp = ["PhoneNumber",element.userProfile.phoneNo];
                rows.push(temp);
                if(element.userProfile.address == undefined || element.userProfile.country == undefined ||   element.userProfile.postalCode == undefined){
                                   temp = ["Contact Address"," "];
                                    rows.push(temp);
                }
                else{
                  temp = ["Contact Address",element.userProfile.address+" "+element.userProfile.country+" "+element.userProfile.postalCode];
                     rows.push(temp);
                }
                            if(element.userProfile.occuptation_tt == 6){
                                   temp = ["Occupation","Full-time Internship"];
                                    rows.push(temp);
                            }
                            else if(element.userProfile.occuptation_tt == 5){
                                   temp = ["Occupation","Part Time Internship"];
                                    rows.push(temp);
                            }
                            else if(element.userProfile.occuptation_tt == 4){
                                   temp = ["Occupation","Full-time Student"];
                                    rows.push(temp);
                            }
                            else if(element.userProfile.occuptation_tt == 3){
                                   temp = ["Occupation","Full-time Student"];
                                    rows.push(temp);
                            }
                            else if(element.userProfile.occuptation_tt == 2){
                                   temp = ["Occupation","Part-time Employee"];
                                    rows.push(temp);
                            }
                            else if(element.userProfile.occuptation_tt == 1){
                                   temp = ["Occupation","Full-time Employee"];
                                    rows.push(temp);
                            }
                            else{
                                  temp = ["Occupation"," "];
                                    rows.push(temp);
                            }
                        temp = ["WorkPlace/StudyPlace",element.userProfile.work_place];
                          rows.push(temp); 
                        temp = ["Biography",element.userProfile.biography];
                          rows.push(temp);
                        temp = ["Previous City Of residence",element.userProfile.previous_city];
                          rows.push(temp);
          }  
        });  
       let img_url="http://colivingapp.com/assets/images/Logo-colive.png";
             var imgUrl = 'assets/images/Logo-colive.png';

       var images1;     
      
      let promiseObject = this.convertToDataURLviaCanvas(imgUrl, "image/png").then( base64Img => {
      });

      promiseObject.then(function(result) {
              console.log(result);    //in this console log i have base 64 string
      });



       for(var i = 0;i < a;i++){
           rows1.push(rows[i]);

          

          //doc.addImage(asdf, 'PNG', 90,10,0,20)

          doc.autoTable(col, rows1,{
            theme: 'grid',
            styles: {rowHeight: 11,overflow: 'linebreak'},
            columnStyles: { 0: {columnWidth: 75}, 1: {columnWidth: 110}},
            margin: { top: 20, left: 20, right: 20, bottom: 0 },
          });
          if(i+1 == a)
          {
            doc.addPage();
            rows1=[];
            if(a < rows.length){
                a=a+11;
            }
          }
        }

//doc.output('save','txt.pdf');
              let pdfOutput = doc.output();
            this.presentLoading();
            let buffer = new ArrayBuffer(pdfOutput.length);

            let array = new Uint8Array(buffer);

            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }

            // For this, you have to use ionic native file plugin
           const directory = this.file.externalApplicationStorageDirectory ;
         //  alert(directory);
            this.myRand=this.random();
            console.log(this.myRand);
            const fileName = "Group_"+this.myRand+".pdf";
            console.log(directory+fileName);
            this.file.writeFile(directory,fileName,buffer,{replace:true})
            .then((success)=> 
            this.fileOpener.open(directory+fileName, 'application/pdf') .then(() => console.log('File is opened'))
             )
            .catch((error)=> console.log("Cannot Create File"));
               
     } 
  }
    random(): number {
       let rand = Math.floor(Math.random()*20)+1;
       return rand;
      }

}
