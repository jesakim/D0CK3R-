// hunt.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {HuntModule} from "../../entities/hunt/hunt.module";

@Injectable({
  providedIn: 'root'
})
export class HuntService {
  private _url = "http://localhost:8080/api/v1/hunting";

  constructor(private httpClient: HttpClient) { }

  public addHunt(huntData: HuntModule): Observable<any> {
    return this.httpClient.post(this._url, huntData);
  }
}
