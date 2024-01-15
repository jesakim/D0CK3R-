import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompetitionModule} from "../../entities/competition/competition.module";
import { CompetitionResponse } from 'src/app/entities/competition/CompetitionResponse.module';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private _url = "http://localhost:8080/api/v1/competition";
  constructor(private httpClient:HttpClient) { }

  public getOpenComps():Observable<Array<CompetitionModule>>{
    return this.httpClient.get<Array<CompetitionModule>>(this._url+"/open");
  }

  public getActiveComps():Observable<Array<CompetitionModule>>{
    return this.httpClient.get<Array<CompetitionModule>>(this._url+"/active");
  }

  getComps(currentPage: number, size: number, status: string): Observable<CompetitionResponse> {
    let params = new HttpParams()
      .set('page', currentPage.toString())
      .set('size', size.toString())
      .set("status",status.toString());



    return this.httpClient.get<CompetitionResponse>(`${this._url}/all`, { params });
  }
  public getAllComps():Observable<Array<CompetitionModule>>{
    return this.httpClient.get<Array<CompetitionModule>>(this._url);
  }



  public save(comp : CompetitionModule) : Observable<CompetitionModule>{
    return  this.httpClient.post<CompetitionModule>(this._url,comp)
  }

  public delete(comp : CompetitionModule) : Observable<CompetitionModule>{
    return this.httpClient.delete<CompetitionModule>(this._url+`/${comp.id}`)
  }

  public update(comp : CompetitionModule) : Observable<CompetitionModule>{
      return this.httpClient.patch<CompetitionModule>(this._url,comp)
  }
}
