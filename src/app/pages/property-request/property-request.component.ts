import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { NavParams} from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { environment } from '../../../environments/environment';
import { LoadingController } from '@ionic/angular';

import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';


@Component({
  selector: 'app-property-request',
  templateUrl: './property-request.component.html',
  styleUrls: ['./property-request.component.scss']
}) 
export class PropertyRequestComponent implements OnInit {

	userId:any;
	base_url:any;
	propertyId:any;
	landlord_id:any;
	teamListArr:any;
	requestFrom:FormGroup;
	submitted = false;
	fagree = false;
	isError : boolean = false;
	isSuccess : boolean = false;
	res:any = [];
	errorsArr:any = []; 
	sucessArr:any = []; 

  constructor(
			private route: ActivatedRoute,
			private clipboard: Clipboard,
			public navParams: NavParams,
			private http: HttpClient,
			public formBuilder: FormBuilder,   
			public loadingController: LoadingController

  ) { 
 	this.userId = sessionStorage.getItem("loggedInId"); 
    let dataArr = this.navParams; 
    this.propertyId = dataArr.data.propertyId;
    this.landlord_id = dataArr.data.landlordId; 
    this.base_url = environment.base_url; 
    this.requestFrom = this.formBuilder.group({
      team_id: new FormControl('', Validators.required),
      g_chat: new FormControl('', Validators.required),
      property_id: new FormControl(this.propertyId, Validators.required),
      landlord_id: new FormControl(this.landlord_id, Validators.required),
      agree: ['false', Validators.requiredTrue]
    });
    } 

  ngOnInit() {
  	this.getTeamsList();
  }
  get f() { return this.requestFrom.controls; } 

  requestProperty(form){   
	this.submitted = true;  
	console.log(this.requestFrom.controls);
	if (this.requestFrom.invalid) {  
	return;
	}else{  
	const input_data = 
	{ 
	"property_id" : form.property_id,
	"team_id" : form.team_id,  
	"gchat" : form.g_chat,  
	"landlord_id" : form.landlord_id,  
	}
	console.log(input_data); 
	this.pleaseWait('Please wait...');
	console.log('input_data'); 

	let token; 
	if(sessionStorage.getItem("auth_token")!=undefined){
	token = sessionStorage.getItem("auth_token"); 
	} 

      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'property/request', input_data, httpOptions).subscribe((response:any) => { 
      	  this.pleaseWait(response.message);
      	  sessionStorage.setItem("auth_token", response['token']); 
          this.isSuccess = true;
          this.sucessArr = response.message;
          this.isError = false;  
          this.loadingController.dismiss().then(a => console.log('dismissed'));
     },error=>{ 
       this.isError = true;
     	 console.log("ERROR"); 
     });     
    }
  }


   getTeamsList() : void {
    console.log('All teams gets list out under this function');
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url+'getTeam', { headers: headers }).subscribe((response: any) => {
        this.teamListArr = response.teams; 
        console.log(this.teamListArr);
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
     });     
  }
  async pleaseWait(message_detail) {
    const loading = await this.loadingController.create({
      message: message_detail,
      duration: 3000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


}
