import { CompetitionModule } from "./competition.module";

export interface CompetitionResponse {
    content: Array<CompetitionModule>;
    pageable: any;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: any;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }
