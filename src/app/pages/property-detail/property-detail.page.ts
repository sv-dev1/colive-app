import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute,  Params} from '@angular/router';
import { environment} from '../../../environments/environment';
import { HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.page.html',
  styleUrls: ['./property-detail.page.scss'],
})
export class PropertyDetailPage implements OnInit {
  propertyId:any="";
  constructor(
         private route: ActivatedRoute,

  	) { 
    this.route.queryParams.subscribe(params => {
      this.propertyId = params['propertyId'];
    });
      	console.log(this.propertyId);

  }

  ngOnInit() {
  }

}
