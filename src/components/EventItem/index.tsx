import React, { FC } from 'react';
import { IEvent } from '../../model/events.model';
import { EventItemWrapper, TeamInfo } from '../EventsList/EventsList.styled';
import { getTranslations } from '../../utils/translations';
import { formatEventStartDate } from '../../utils/common';
import { DEFAULT_EVENT_TIME_FORMAT, DEFAULT_TIME_FORMAT, DEFAULT_TIME_ZONE } from '../../constants/common.constants';
import { EventsStatusesTranslations } from '../../constants/events.constants';
import { eventModalActions } from '../../store/eventModal/eventModal.slice';
import { useAppDispatch } from '../../store';

const EventItem: FC<{ event: IEvent }> = ({ event }) => {
  const dispatch = useAppDispatch();

  const handleOpenEventModal = (id: number) => {
    dispatch(eventModalActions.openEventModal(id));
  };

  return (
    <EventItemWrapper
      key={event.id}
      status={event.status}
      onClick={() => handleOpenEventModal(event.id)}
    >
      <TeamInfo>
        {event.home_team.has_logo && (<img src={event.home_team.logo} alt='homeTeamLogo' />)}
        {getTranslations(event.home_team)}
      </TeamInfo>
      <div className='score'>
        <span>
          {formatEventStartDate(event.start_at).tz(DEFAULT_TIME_ZONE).format(DEFAULT_EVENT_TIME_FORMAT)}
        </span>
        {event.home_score ? event.home_score.current : 0} - {event.away_score ? event.away_score.current : 0}
        <span className='status'>
          {EventsStatusesTranslations[event.status]}
        </span>
      </div>
      <TeamInfo className='awayTeam'>
        {event.away_team.has_logo && (<img src={event.away_team.logo} alt='awayTeamLogo' />)}
        {getTranslations(event.away_team)}
      </TeamInfo>
    </EventItemWrapper>
  );
};

export default EventItem;
