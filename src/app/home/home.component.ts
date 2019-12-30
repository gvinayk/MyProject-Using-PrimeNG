import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../get-api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recievedDataFromAPI:any;
  myinterval = interval(10000);
  poppedData: object;
  display: boolean = false;
  SearchByTitle:string;

  constructor( private GetDetailsService : GetAPIService  ) { }

  ngOnInit() {
    this.getDataFromService();
    this.myinterval.subscribe(()=>this.getDataFromService());
  }

  getDataFromService(){
    this.GetDetailsService.getDataMethod().subscribe(
      (responseFromAPI:any)=>{
        this.recievedDataFromAPI = responseFromAPI.hits;
        console.log(this.recievedDataFromAPI);
      }
    );
  }

  ShowModelToView(poppedDataOnClick){
    this.poppedData = poppedDataOnClick;
    this.display = true;
  }

}
