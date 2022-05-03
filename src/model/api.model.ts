import { EventsViewModes } from '../constants/events.constants';

export interface IGetEventsBySportIdParams {
  id: number,
  mode: EventsViewModes,
  date?: string,
}
