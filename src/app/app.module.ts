import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores.component';
import { GameComponent } from './game.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { InstructionsComponent } from './instructions.component';
import { WelcomeComponent} from './welcome.component';
import { FinalComponent} from './final.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



const appRoutes: Routes = [
  { path: 'welcome/:type', component: WelcomeComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'final', component: FinalComponent },
  { path: 'game',      component: GameComponent },
  { path: '',      redirectTo: '/welcome/1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent, ScoresComponent, GameComponent, InstructionsComponent, PageNotFoundComponent, WelcomeComponent, FinalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
