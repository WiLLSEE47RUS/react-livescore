import React, { FC } from 'react';
import { H2HEventItem, H2HEventsWrapper, H2HTeamInfo } from './H2HEvents.styled';
import { getTranslations } from '../../utils/translations';
import { formatEventStartDate } from '../../utils/common';
import { DEFAULT_EVENT_TIME_FORMAT, DEFAULT_TIME_ZONE } from '../../constants/common.constants';
import { EventsStatusesTranslations, EventTypes } from '../../constants/events.constants';
import { eventModalActions } from '../../store/eventModal/eventModal.slice';
import { useAppDispatch } from '../../store';
import { IEvent } from '../../model/events.model';

const H2HEvents: FC<{ events: IEvent[], eventData: IEvent }> = ({ events, eventData }) => {

  const dispatch = useAppDispatch();

  const handleOpenEventModal = (id: number) => {
    dispatch(eventModalActions.openEventModal(id));
  };

  return (
    <H2HEventsWrapper>
      <h2>Другие встречи {eventData.sport.slug === EventTypes.TENNIS ? 'игроков' : 'команд'}</h2>
      {events.map(el => (
        <H2HEventItem
          key={el.id}
          status={el.status}
          onClick={() => handleOpenEventModal(el.id)}
        >
          <H2HTeamInfo>
            {el.home_team.has_logo && (<img src={el.home_team.logo} alt='homeTeamLogo' />)}
            {getTranslations(el.home_team)}
          </H2HTeamInfo>
          <div className='score'>
            <span>
              {formatEventStartDate(el.start_at).tz(DEFAULT_TIME_ZONE).format(DEFAULT_EVENT_TIME_FORMAT)}
            </span>
            {el.home_score ? el.home_score.current : 0} - {el.away_score ? el.away_score.current : 0}
            <span className='status'>
              {EventsStatusesTranslations[el.status]}
            </span>
          </div>
          <H2HTeamInfo className='awayTeam'>
            {el.away_team.has_logo && (<img src={el.away_team.logo} alt='awayTeamLogo' />)}
            {getTranslations(el.away_team)}
          </H2HTeamInfo>
        </H2HEventItem>
      ))}
    </H2HEventsWrapper>
  );
};

export default H2HEvents;
