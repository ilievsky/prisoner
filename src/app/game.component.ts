/// <reference types="node" />

import { Component } from '@angular/core';
import '../assets/css/styles.css';	
import {IChoices} from './interfaces/IChoices';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'game-board',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent { 

	private gameIndex:number;
	private currentScore:number;
	private lookingForOponent:boolean;
	private responseReady:boolean;
	private userChoices:{};

	constructor(private router: Router, private route: ActivatedRoute)	{
		this.gameIndex = 1;
		this.currentScore = 0;
		this.responseReady = false;
		this.userChoices = {};
	}

	chooseRed(): void{
		this.playGame('red');
	}

	chooseYellow(): void{
		this.playGame('yellow');
	}

	nextGame(): void{
		this.gameIndex++;
		this.responseReady = false;
	}

	private playGame(chosen:string) {
		if(this.gameIndex<=5) {
			
			this.userChoices[this.gameIndex] = chosen;

			var score = this.getScore(chosen);

			this.waitForOponent(chosen, ()=>{
				this.currentScore += score;
			});

		}
		else {
			this.gameOver();
		}
	}

	private waitForOponent(chosen:string, cb:Function) {
		this.lookingForOponent = true;
		
		var secs = (Math.floor(Math.random() * 6) + 1  );

		setTimeout(()=>{
			this.responseReady = true;
			this.lookingForOponent = false;
			cb();
		}, secs * 1000);

	}

	getScore(chosen:string) {
		if (chosen == 'yellow')
			return 6;
		if (chosen == 'red')
			return 3;
	}

	private gameOver() {
		localStorage.setItem('score', this.currentScore.toString());
		this.router.navigate(['/final']);
	}
}