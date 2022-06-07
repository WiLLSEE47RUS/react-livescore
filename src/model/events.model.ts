import { ITeam } from './team.model';
import { IOdds } from './odds.model';
import { IPeriod, IPeriodsTime } from './periods.model';
import { ISportModel } from './sport.model';
import { ITimeDetails } from './timeDetails.model';
import { IScore } from './score.model';
import { ILeague } from './league.model';
import { EventsStatuses } from '../constants/events.constants';
import { ISectionModel } from './sections.model';
import { IChallengeModel } from './challenge.model';
import { IVenueModel } from './venue.model';

export interface IEvent {
  aggregated_winner_code?: string,
  attendance?: string,
  away_score?: IScore,
  away_team: ITeam,
  away_team_id: number,
  cards_code: string,
  challenge: IChallengeModel;
  challenge_id: number,
  venue: IVenueModel;
  coverage: number,
  cup_match_in_round?: number,
  cup_match_order?: number,
  default_period_count: number,
  event_data_change: string,
  first_supply?: number,
  ground_type?: string,
  home_score?: IScore,
  home_team: ITeam,
  home_team_id: number,
  id: number,
  lasted_period?: string,
  league?: ILeague,
  league_id: number,
  main_odds?: IOdds,
  medias_count?: number,
  name: string,
  section: ISectionModel,
  periods?: IPeriod,
  periods_time?: IPeriodsTime,
  priority: number,
  referee_id?: number,
  result_only: boolean,
  round_info: {
    round: number
  },
  round_number: number,
  season_id: number,
  series_count: number,
  slug: string,
  sport: ISportModel,
  sport_id: number,
  start_at: string,
  status: EventsStatuses,
  status_lineup?: number,
  status_more: string,
  time_details: ITimeDetails,
  venue_id: number,
  winner_code: number
}
