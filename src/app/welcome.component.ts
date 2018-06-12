/// <reference types="node" />

import { Component } from '@angular/core';
import '../assets/css/styles.css';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent { 

  private opType:number;
  private user_id:string;
  private stage:number;
  private agreed:boolean;

	constructor(private router: Router, private route: ActivatedRoute)	{
    localStorage.setItem('score', null);
    this.user_id = this.guid();
    localStorage.setItem('user_id', this.user_id);
    this.stage = 1;
    this.agreed = false;
	}

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => params['type'])
    .subscribe((type: number) => this.opType = type);

    localStorage.setItem('opType', this.opType.toString());
  }

	start(): void {
      if(this.agreed)
    	  this.router.navigate(['/instructions']);

  }

  nextStage(): void{
    this.stage=2;
  }
}
