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

	constructor(private router: Router, private route: ActivatedRoute)	{
    localStorage.setItem('score', null);
	}

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => params['type'])
    .subscribe((type: number) => this.opType = type);

    localStorage.setItem('opType', this.opType.toString());
  }

	start(): void {
    	this.router.navigate(['/instructions']);

  }
}
