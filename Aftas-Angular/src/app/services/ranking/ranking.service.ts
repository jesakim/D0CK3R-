import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RankingModule} from "../../entities/ranking/ranking.module";
import {Observable} from "rxjs";
import {RankingModuleResponse} from "../../entities/ranking/ranking-response.module";

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private _url = "http://localhost:8080/api/v1/ranking";
  constructor(private httpClient:HttpClient) { }


  getRankingsByCompetition(competitionId: number): Observable<Array<RankingModuleResponse>> {
    return this.httpClient.get<Array<RankingModuleResponse>>(`${this._url}/competitions/${competitionId}/rankings`);

  }
  /*public getRanks() : Observable<number>{
    return this.httpClient.get<number>(this._url);
  }*/
  public save(rank : RankingModule) : Observable<RankingModule>{
    return  this.httpClient.post<RankingModule>(this._url,rank)
  }

  /*public delete(rank : MemberModule) : Observable<MemberModule>{
    return this.httpClient.delete<MemberModule>(this._url+`/${comp.id}`)
  }

  public update(comp : CompetitionModule) : Observable<CompetitionModule>{
    return this.httpClient.patch<CompetitionModule>(this._url,comp)
  }*/
}
