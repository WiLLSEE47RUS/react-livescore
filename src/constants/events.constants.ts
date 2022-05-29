export enum EventsViewModes {
  ALL = 'ALL',
  LIVE = 'LIVE',
}

export const EventsViewModesTitle = {
  [EventsViewModes.ALL]: 'Все',
  [EventsViewModes.LIVE]: 'Лайв',
};

export enum EventsStatuses {
  NOT_STARTED = 'notstarted',
  INPROGRESS = 'inprogress',
  FINISHED = 'finished',
  POSTPONED = 'postponed',
  CANCELED = 'canceled',
}

export const EventsStatusesTranslations = {
  [EventsStatuses.NOT_STARTED]: 'не начат',
  [EventsStatuses.INPROGRESS]: 'лайв',
  [EventsStatuses.FINISHED]: 'матч закончен',
  [EventsStatuses.POSTPONED]: 'матч перенесен',
  [EventsStatuses.CANCELED]: 'матч отменен',
};

export const EventsStatusesColors = {
  [EventsStatuses.NOT_STARTED]: 'var(--white)',
  [EventsStatuses.INPROGRESS]: 'var(--lightGreen)',
  [EventsStatuses.FINISHED]: 'var(--darkBlue)',
  [EventsStatuses.POSTPONED]: 'var(--midGray)',
  [EventsStatuses.CANCELED]: 'var(--darkOrange)',
};

