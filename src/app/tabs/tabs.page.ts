import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  notific:number = 2;

  constructor() {}

  ionViewWillLoad() {
    this.notific = 5;
  }

}
