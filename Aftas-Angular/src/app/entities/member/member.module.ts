import {Time} from "@angular/common";

export interface MemberModule {

  id: number;
  num: number;
  name: string;
  familyName: string;
  accessionDate: Time;
  nationality: string;
  identityDocument: string;
  identityNumber: string;
}

