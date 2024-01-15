import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FishModule} from "../../entities/fish/fish.module";

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private _url = "http://localhost:8080/api/v1/fish";
  constructor(private httpClient:HttpClient) { }

  public getFishes():Observable<Array<FishModule>>{
    return this.httpClient.get<Array<FishModule>>(this._url)
  }
}
