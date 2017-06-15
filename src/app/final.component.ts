/// <reference types="node" />

import { Component } from '@angular/core';
import '../assets/css/styles.css';
import {Router} from '@angular/router';

@Component({
  selector: 'final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent { 

 	private saved:boolean;
  private score:number;
  private opType:number;

	constructor(private router: Router)	{
		this.saved = false;

    this.score = parseInt(localStorage.getItem('score'));
    this.opType = parseInt(localStorage.getItem('opType'));
	}


	save(): void {
    	
		this.saved = true;

  }
  
  end(): void {

  }
}
