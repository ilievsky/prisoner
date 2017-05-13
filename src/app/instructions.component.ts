/// <reference types="node" />

import { Component } from '@angular/core';
import '../assets/css/styles.css';
import {Router} from '@angular/router';

@Component({
  selector: 'instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent { 

 	private startClicked:boolean;
 	private foundOponent:boolean;

	constructor(private router: Router)	{
		this.startClicked = false;
		this.foundOponent = false;
	}


	start(): void {
    	
		var _this = this,
			secs = (Math.floor(Math.random() * 6) + 1  );
		this.startClicked = true;


    	setTimeout(() => {
    	    _this.foundOponent = true;
    	    setTimeout(() => _this.router.navigate(['/game']), 2500);
    	    }, secs*1000);
  	}
}
