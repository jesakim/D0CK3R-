import {Component, OnInit} from '@angular/core';
import {RankingService} from "../../services/ranking/ranking.service";
import {Observable} from "rxjs";
import {RankingModule} from "../../entities/ranking/ranking.module";
import {CompetitionService} from "../../services/competitions/competition.service";
import {CompetitionModule} from "../../entities/competition/competition.module";
import {RankingModuleResponse} from "../../entities/ranking/ranking-response.module";

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  selectedCompetitionId!:number;

  rankingsList!:Observable<Array<RankingModuleResponse>>
  competitionsList!:Observable<Array<CompetitionModule>>

  constructor(private rankingService: RankingService,
              private competitionService: CompetitionService) {

  }

  loadRankingsByCompetition(): void {
    if (this.selectedCompetitionId !== null) {
      this.rankingsList=this.rankingService.getRankingsByCompetition(this.selectedCompetitionId);
    }
  }

  ngOnInit(): void {
    this.competitionsList = this.competitionService.getAllComps();
  }
}
