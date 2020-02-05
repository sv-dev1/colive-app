import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router'; 
import { LoadingController } from '@ionic/angular';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router, 
            public loadingController: LoadingController

    ) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.success){
                    }
                 }
            }),
  /*          catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    console.log(err);
                    console.log(err.status);
                    var strung = JSON.stringify(err['error']);
                    if(err.status == 401){
                      this.customMessages('Session Expired.You must login again!');
                      this.logoutme();
                    }

            }
            return Observable.throw(error);
            })*/
            );
    
      
      
}

 async customMessages(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 1000,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


logoutme(){
	  this.presentLoading();
}

async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait.....',
      duration: 3000,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Logout Successfull!');
    if(sessionStorage.getItem("auth_token") != undefined)
      {
        sessionStorage.removeItem("auth_token");
        this.router.navigate(['login']);
      }

}
  


}
