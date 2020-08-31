import { RandomColorService } from './services/random-color.service';
import {BrowserModule} from '@angular/platform-browser';
import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pc';

  data: Array<any>

  totalRecords : String
  page: Number =1
 
  constructor ( private randomColor: RandomColorService ){
    
    this.data = new Array<any>()
  }

  getColor(){
    this.randomColor.getData().subscribe((data) => {
      console.log (data)
      this.data = data.results
      this.totalRecords = data.results.length
    })


  }
}
