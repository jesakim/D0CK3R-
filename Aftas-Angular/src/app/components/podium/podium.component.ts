// winners.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {CompetitionModule} from "../../entities/competition/competition.module";
import {MemberModule} from "../../entities/member/member.module";
import {PodiumService} from "../../services/podium/podium.service";
import {CompetitionService} from "../../services/competitions/competition.service";

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  competitions!: Observable<Array<CompetitionModule>>;
  winners: MemberModule[] = [];
  selectedCompetitionId!:number;

  constructor(private formBuilder: FormBuilder,
              private podiumService: PodiumService,
              private competitionService: CompetitionService) {

  }

  ngOnInit(): void {
    this.competitions=this.competitionService.getAllComps()
  }

  onCompetitionChange() {
     this.winners=[]
    if (this.selectedCompetitionId !== null) {
      this.podiumService.getWinners(this.selectedCompetitionId).subscribe(
        (winners) => {
          this.winners = winners;
        },
        (error) => {
          console.error('Error fetching winners', error);
        }
      );
    }
  }
}
