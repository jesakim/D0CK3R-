import {Time} from "@angular/common";

export class CompetitionModule {

  constructor(public id: number | null,
              public code: string | null,
              public date: Date,
              public startTime: Time,
              public endTime: Time,
              public numberOfParticipants: number,
              public location: string,
              public status: string | null,
              public amount: number) {
  }
}

