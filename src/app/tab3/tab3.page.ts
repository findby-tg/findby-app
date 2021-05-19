import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isUsaLoc:boolean=false;
  distancia:number;
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';

  constructor() {

  }
}
