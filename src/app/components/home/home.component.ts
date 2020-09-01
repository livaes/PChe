import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .tooltip .tooltip-inner {
      background-color: #545555;
      font-size: 100%;
    }
    .tooltip .arrow::before {
      border-top-color: #545555;
    }
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class HomeComponent implements OnInit {

  
  closeResult: string;
  public colores: Array <any>;
  p: number = 1;


  constructor(private modalService: NgbModal ) { 

    this.colores =[
      {name: "Cerulean", year :2000, colo:"#98B2D1", pantone: "15-4020" },
      {name: "FuchsiaRose", year :2001, colo:"#C74375", pantone: "17-2031" },
      {name: "TrueRed", year :2002, colo:"#BF1932", pantone: "19-1664" },
      {name: "AquaSkyn", year :2003, colo:"#7BC4C4", pantone: "14-4811" },
      {name: "Tigerlily", year :2004, colo:"#E2583E", pantone: "17-1456" },
      {name: "BlueTurquoise", year :2005, colo:"#53B0AE", pantone: "15-5217" }
    ];
  }

  ngOnInit(): void {
   
}

  copy_data(container) {
    var range = document.createRange();
    range.selectNode(container); 
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("data copied");
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    
  }


}
