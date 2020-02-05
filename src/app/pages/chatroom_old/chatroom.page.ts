import { Component, OnInit,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { IonContent,ActionSheetController, Platform} from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';  
//import { ParseUrl } from './directives/parse-url.pipe.directive';

import { PopoverController } from '@ionic/angular'; 
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit{ 
//@ViewChild(IonContent, {read: IonContent}) myContent: IonContent;
@ViewChild(IonContent) content: IonContent;

messages = [];
gruopMessages = [];
socket_url : string = "";
teamId = '';
userId = '';
ref_code = '';
loggedInUsername = '';
nickname = '';
owner = '';
message = '';
message_wanrings = '';


constructor(
  private route: ActivatedRoute, public popoverController: PopoverController,  
  private http: HttpClient, 
  public itemService: ItemService,
  public alertController: AlertController,
  public loadingController: LoadingController,
  private socket: Socket
) {  

    this.userId = sessionStorage.getItem("loggedInId"); 
    this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
    this.ref_code = sessionStorage.getItem("ref_code");

    this.socket_url =   environment.socket_url;
    this.socket.connect(); 
    this.route.queryParams.subscribe(params => { 
      this.teamId = params['teamId'];
      this.owner = params['owner'];
      this.nickname = params['nickname'];   
  });   
    this.joinChat(); 
    this.loadMessages();  
    this.loadMyMessages();  
    this.getMessages();   
} 

async presentPopover(ev: any) { 
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{teamId:this.teamId,baseurl: environment.base_url,ref_code:this.ref_code,group_title:this.nickname,owner:this.owner},
      event: ev,
      translucent: true
    });  

    return await popover.present();
  } 

  ngOnInit() {  
    console.log('ngOnInit');   
  }
  
  ionViewDidEnter(){
    this.ScrollToBottom();
  }

  joinChat() {   
    this.socket.emit('set-nickname', {'nickname':this.nickname,'from_id':this.userId,'username':this.loggedInUsername,'to_id':this.teamId});
  }

/***************scroll down******************/

  ScrollToBottom(){
    this.content.scrollToBottom(1500);
  }
/***************scroll down******************/

  
  getMessages() { 
    this.socket.on('getMessage', (data) => { 
      this.gruopMessages.push(data)
    });   
  } 

async loadMyMessages() { 
    this.socket.on('messages', (data) => {  
    this.gruopMessages = data.messages;  
    }); 
  }

 loadMessages() { 
  this.socket.emit('load-messages',{userId: this.userId,teamId: this.teamId} ); 
  }
 isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
  sendMessage() {
  if(!this.isEmptyOrSpaces(this.message)){ 
    this.socket.emit('newMessage', { userId: this.userId,teamId: this.teamId,username:this.loggedInUsername,msg: this.message});
    this.gruopMessages.push({created_at: new Date(),from_id:this.userId,userId: this.teamId, from: this.userId,username:this.loggedInUsername,message: this.message});
    this.message = '';  
    this.ScrollToBottom();
    this.message_wanrings ='';
    }
    else
    {
      this.message_wanrings = 'Please enter message';  
    }
  }


 

  

}