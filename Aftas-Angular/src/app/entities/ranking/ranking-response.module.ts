import {MemberModule} from "../member/member.module";
import {CompetitionModule} from "../competition/competition.module";


export interface RankingModuleResponse {
  id: number;
  rank: number;
  score: number;
  member: MemberModule;
  competition: CompetitionModule;
}

