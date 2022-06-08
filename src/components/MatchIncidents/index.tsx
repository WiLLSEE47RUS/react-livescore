import React, { FC, useMemo } from 'react';
import { MatchIncident, MatchIncidentsWrapper } from './MatchIncidents.styled';
import { IEvent } from '../../model/events.model';
import { useGetEventIncidentsByIdQuery } from '../../services/api';
import { Spinner } from '../Spinner';
import { IIncidentsModel } from '../../model/incidents.model';
import { getTranslations } from '../../utils/translations';

const MatchIncidents: FC<{ eventData: IEvent }> = ({ eventData }) => {
  const { data, isLoading } = useGetEventIncidentsByIdQuery(eventData.id);

  const incidentsData = useMemo(() => data && [...data.data].sort((a, b) => a.order - b.order) || [], [data]);

  const getMatchIncident = (incident: IIncidentsModel) => {
    switch (incident.incident_type) {
    case 'period': {
      const type = incident.text.split(' ')[0];
      const text = type === 'HT' ? 'Перерыв' : 'Конец матча';
      // eslint-disable-next-line react/no-unescaped-entities
      return <span>{incident.time}', {text}, {incident.text.split(' ').slice(1).join('')}</span>;
    }
    case 'injuryTime': {
      const text = 'Дополнительное время';
      // eslint-disable-next-line react/no-unescaped-entities
      return <span>{incident.time}', {text}, +{incident.length}'</span>;
    }
    case 'goal': {
      const text = 'Гол!';
      // eslint-disable-next-line react/no-unescaped-entities
      return <div style={{ display: 'flex', columnGap: '5px' }}>
        <span>{incident.time}',</span>
        <span>{text},</span>
        <span>{incident.player && getTranslations(incident.player)},</span>
        <span style={{ color: 'var(--gray)' }}>{incident.player_two_in && ` (${getTranslations(incident.player_two_in)})`},</span>
        <span> {incident.home_score} - {incident.away_score}</span>
      </div>;
    }
    case 'card': {
      const text = incident.card_type === 'Yellow' ?  'Желтая карточка!' : 'Красная карточка!';
      // eslint-disable-next-line react/no-unescaped-entities
      return <div style={{ display: 'flex', columnGap: '5px' }}>
        <span>{incident.time}',</span>
        <span>{text},</span>
        <span>{incident.player && getTranslations(incident.player)}</span>
      </div>;
    }
    case 'substitution': {
      const text = 'Замена!';
      // eslint-disable-next-line react/no-unescaped-entities
      return <div style={{ display: 'flex', columnGap: '5px' }}>
        <span>{incident.time}',</span>
        <span>{text},</span>
        <span>{incident.player && getTranslations(incident.player)},</span>
        <span style={{ color: 'var(--gray)' }}>{incident.player_two_in && ` (${getTranslations(incident.player_two_in)})`}</span>
      </div>;
    }
    default: {
      return <span>{incident.text || incident.reason || incident.incident_type}</span>;
    }
    }
  };

  if (isLoading) return <Spinner width='50px' />;

  return (
    <MatchIncidentsWrapper>
      {incidentsData.map((el, index) => (
        <MatchIncident type={el.incident_type} playerTeam={el.player_team} key={index}>
          {getMatchIncident(el)}
        </MatchIncident>
      ))}
    </MatchIncidentsWrapper>
  );
};

export default MatchIncidents;
