import React, { FC, useMemo, useState } from 'react';
import {
  MatchInfoContent,
  MatchInfoViewModeButton,
  MatchInfoViewModesWrapper,
  MatchInfoWrapper,
} from './MatchInfo.styled';
import { MatchInfoViewModes, MatchInfoViewModesTitle } from '../../constants/events.constants';
import { IEvent } from '../../model/events.model';
import { useGetEventLineupsByIdQuery, useGetH2HEventsQuery } from '../../services/api';
import MatchInfoLineup from '../MatchInfoLineup';
import H2HEvents from '../H2HEvents';
import MatchStatistics from '../MatchStatistics';
import MatchIncidents from '../MatchIncidents';
import StadiumInfo from '../StadiumInfo';

const MatchInfo: FC<{ eventData: IEvent }> = ({ eventData }) => {
  const [selectedMatchInfoViewMode, setSelectedMatchInfoViewMode] = useState<MatchInfoViewModes | null>(null);

  const { data } = useGetEventLineupsByIdQuery(eventData.id);

  const { homeTeamLineup, awayTeamLineup } = useMemo(() =>{
    const homeTeamLineup = data?.data.some(el => el.is_confirmed)
      ? data?.data.find(lineup => lineup.team_id === eventData.home_team_id && lineup.is_confirmed)
      : data?.data.find(lineup => lineup.team_id === eventData.home_team_id);
    const awayTeamLineup = data?.data.some(el => el.is_confirmed)
      ? data?.data.find(lineup => lineup.team_id === eventData.away_team_id && lineup.is_confirmed)
      : data?.data.find(lineup => lineup.team_id === eventData.away_team_id);
    return { homeTeamLineup, awayTeamLineup };
  }, [data, eventData]);

  const { data: h2hdata } = useGetH2HEventsQuery(
    { homeTeam: eventData.home_team_id, awayTeam: eventData.away_team_id },
    { skip: !eventData.home_team_id || !eventData.away_team_id},
  );
  const h2hevents = useMemo(() => h2hdata && [...h2hdata.data].filter(event => event.id !== eventData.id) || [], [h2hdata, eventData]);

  return (
    <MatchInfoWrapper>
      <h2>Информация о матче</h2>
      <MatchInfoViewModesWrapper>
        <MatchInfoViewModeButton
          active={selectedMatchInfoViewMode === MatchInfoViewModes.STATISTICS}
          mode={MatchInfoViewModes.STATISTICS}
          onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.STATISTICS)}
        >
          {MatchInfoViewModesTitle[MatchInfoViewModes.STATISTICS]}
        </MatchInfoViewModeButton>
        {(homeTeamLineup || awayTeamLineup) && (
          <MatchInfoViewModeButton
            active={selectedMatchInfoViewMode === MatchInfoViewModes.LINEUPS}
            mode={MatchInfoViewModes.LINEUPS}
            onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.LINEUPS)}
          >
            {MatchInfoViewModesTitle[MatchInfoViewModes.LINEUPS]}
          </MatchInfoViewModeButton>
        )}
        <MatchInfoViewModeButton
          active={selectedMatchInfoViewMode === MatchInfoViewModes.INCIDENTS}
          mode={MatchInfoViewModes.INCIDENTS}
          onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.INCIDENTS)}
        >
          {MatchInfoViewModesTitle[MatchInfoViewModes.INCIDENTS]}
        </MatchInfoViewModeButton>
        {!!h2hevents.length && (
          <MatchInfoViewModeButton
            active={selectedMatchInfoViewMode === MatchInfoViewModes.H2H}
            mode={MatchInfoViewModes.H2H}
            onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.H2H)}
          >
            {MatchInfoViewModesTitle[MatchInfoViewModes.H2H]}
          </MatchInfoViewModeButton>
        )}
        {!!eventData?.venue?.stadium && (
          <MatchInfoViewModeButton
            active={selectedMatchInfoViewMode === MatchInfoViewModes.STADIUM}
            mode={MatchInfoViewModes.STADIUM}
            onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.STADIUM)}
          >
            {MatchInfoViewModesTitle[MatchInfoViewModes.STADIUM]}
          </MatchInfoViewModeButton>
        )}
      </MatchInfoViewModesWrapper>
      <MatchInfoContent>
        {selectedMatchInfoViewMode === MatchInfoViewModes.LINEUPS && (homeTeamLineup && awayTeamLineup)  && (
          <MatchInfoLineup homeTeamLineup={homeTeamLineup} awayTeamLineup={awayTeamLineup} eventData={eventData}/>
        )}
        {selectedMatchInfoViewMode === MatchInfoViewModes.H2H && !!h2hevents.length && (
          <H2HEvents eventData={eventData} events={h2hevents}/>
        )}
        {selectedMatchInfoViewMode === MatchInfoViewModes.STATISTICS && (
          <MatchStatistics eventId={eventData.id}/>
        )}
        {selectedMatchInfoViewMode === MatchInfoViewModes.INCIDENTS && (
          <MatchIncidents eventData={eventData}/>
        )}
        {selectedMatchInfoViewMode === MatchInfoViewModes.STADIUM && (
          <StadiumInfo venue={eventData.venue}/>
        )}
      </MatchInfoContent>
    </MatchInfoWrapper>
  );
};

export default MatchInfo;
