import { ITeam } from './team.model';
import { IEvent } from './events.model';
import { IPlayerModel } from './player.model';

export interface ILineupMissingPlayerModel{
  id: number;
  type: string;
  reason: number;
  player: IPlayerModel;
}

export interface ILineupToPlayerModel {
  id: number;
  position: number;
  shirt_number: number;
  substitute: boolean;
  position_name: string;
  position_key: string;
  is_captain: boolean;
  lineup: ILineupModel;
  player: IPlayerModel
}

export interface ILineupModel {
  id: number;
  is_confirmed: boolean;
  formation: string;
  avg_rating: number;
  attacking: number;
  technical: number;
  defending: number;
  tactical: number;
  creativity: number;
  best_composition: number;
  team: ITeam;
  team_id: number;
  event: IEvent;
  lineup_players: ILineupToPlayerModel[];
  missing_players: ILineupMissingPlayerModel[];
}

export interface ILineupRow {
  id: number,
  shirt_number: number,
  name: string,
  position: any,
  age: number,
  rating: number,
};
