import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Key } from 'protractor';

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

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    console.log(this.miArray);
  }

  onClickTerms(accepted: Boolean) {
    localStorage.setItem('gdpr', accepted ? 'true' : 'false');
    sessionStorage.setItem('gdpr', accepted ? 'true' : 'false');
    this._cookieService.put('gdpr', accepted ? 'true' : 'false');
  }

}
