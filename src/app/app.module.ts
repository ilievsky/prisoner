import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores.component';
import { GameComponent } from './game.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { InstructionsComponent } from './instructions.component';
import { WelcomeComponent} from './welcome.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'welcome/:type', component: WelcomeComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'game',      component: GameComponent },
  { path: '',      redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  declarations: [
    AppComponent, ScoresComponent, GameComponent, InstructionsComponent, PageNotFoundComponent, WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
