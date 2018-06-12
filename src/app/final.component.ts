/// <reference types="node" />

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../assets/css/styles.css';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent { 

 	private saved:boolean;
  private score:number;
  private opType:number;
  private choices:any;
  private userId:string;


	constructor(private router: Router, private http: Http)	{
		this.saved = false;
    this.score = parseInt(localStorage.getItem('score'));
    this.opType = parseInt(localStorage.getItem('opType'));
    this.choices = JSON.parse(localStorage.getItem('choices'));
    this.userId = localStorage.getItem('user_id');
    console.log(this.choices);
	}


	save(): void {
    	
		this.saved = true;

  }
  
  private populateLog(data: any) {
    let t = {
      'app' : 'abra',
      'level' : 'error',
      'message' : 'prisioner dilema (david)'
    }

    return Object.assign(t, data);
  }

  end(): void {
     
      let headers = new Headers({ 'Content-Type': 'text/plain'});
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(this.populateLog({'score' : this.score,
                                                   'opType' : this.opType,
                                                    'choices' : this.choices,
                                                    'identifier' : this.userId}));
      this.http.post('https://ec.walkmeqa.com/event/log', body, headers)
                .subscribe(
                    () => {window.location.href = 'http://idc.az1.qualtrics.com/jfe/form/SV_82C65JUo0ZmhbBX?user_id=' + this.userId}, //For Success Response
                    err => {console.error(err)} //For Error Response
                );                
    }    
}
