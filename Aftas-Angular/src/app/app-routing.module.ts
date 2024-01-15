import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionComponent} from "./components/competition/competition.component";
import {FishComponent} from "./components/fish/fish.component";
import {HuntComponent} from "./components/hunt/hunt.component";
import {MembersComponent} from "./components/members/members.component";
import {RankComponent} from "./components/rank/rank.component";
import {ParticipationComponent} from "./components/participation/participation.component";
import {PodiumComponent} from "./components/podium/podium.component";

const routes: Routes = [
  {path : "competitions", component: CompetitionComponent},
  {path : "fishs", component: FishComponent},
  {path : "hunts", component: HuntComponent},
  {path : "members", component: MembersComponent},
  {path : "podium", component: PodiumComponent},
  {path : "participations", component: ParticipationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
