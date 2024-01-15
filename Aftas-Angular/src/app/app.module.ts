import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterOutlet} from "@angular/router";
import { CompetitionComponent } from './components/competition/competition.component';
import {AppRoutingModule} from "./app-routing.module";
import { FishComponent } from './components/fish/fish.component';
import { MembersComponent } from './components/members/members.component';
import { HuntComponent } from './components/hunt/hunt.component';
import { RankComponent } from './components/rank/rank.component';
import {HttpClientModule} from "@angular/common/http";
import { CompetitionModalComponent } from './components/competition/competition-modal/competition-modal.component';
 import { ParticipationModalComponent } from './components/participation/participation-modal/participation-modal.component';
import {ParticipationComponent} from "./components/participation/participation.component";
import { PodiumComponent } from './components/podium/podium.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompetitionComponent,
    FishComponent,
    MembersComponent,
    HuntComponent,
    RankComponent,
    ParticipationComponent,
    CompetitionModalComponent,
    ParticipationModalComponent,
    PodiumComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
