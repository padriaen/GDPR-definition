import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements OnInit {

  description: string;
  texto: string = require('../../assets/txt/Lorem.json');
  miArray = require('../../assets/txt/Lorem.json');
  //miArray2 = require('https://raw.githubusercontent.com/oasp/oasp4j/develop/LICENSE.txt');

  constructor() { }

  ngOnInit() {
    console.log(this.miArray);
  }

  onClickTerms(accepted: Boolean) {
    localStorage.setItem('gdpr', accepted ? 'true' : 'false');
  }

}
