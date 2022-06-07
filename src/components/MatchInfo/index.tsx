import React, { FC, useMemo, useState } from 'react';
import {
  MatchInfoContent,
  MatchInfoViewModeButton,
  MatchInfoViewModesWrapper,
  MatchInfoWrapper,
} from './MatchInfo.styled';
import { MatchInfoViewModes, MatchInfoViewModesTitle } from '../../constants/events.constants';
import { IEvent } from '../../model/events.model';
import { useGetEventLineupsByIdQuery } from '../../services/api';
import MatchInfoLineup from '../MatchInfoLineup';

const MatchInfo: FC<{ eventData: IEvent }> = ({ eventData }) => {
  const [selectedMatchInfoViewMode, setSelectedMatchInfoViewMode] = useState(MatchInfoViewModes.LINEUPS);

  const { data }
    = useGetEventLineupsByIdQuery(eventData.id, { skip: selectedMatchInfoViewMode !== MatchInfoViewModes.LINEUPS});

  const { homeTeamLineup, awayTeamLineup } = useMemo(() =>{
    const homeTeamLineup = data?.data.some(el => el.is_confirmed)
      ? data?.data.find(lineup => lineup.team_id === eventData.home_team_id && lineup.is_confirmed)
      : data?.data.find(lineup => lineup.team_id === eventData.home_team_id);
    const awayTeamLineup = data?.data.some(el => el.is_confirmed)
      ? data?.data.find(lineup => lineup.team_id === eventData.away_team_id && lineup.is_confirmed)
      : data?.data.find(lineup => lineup.team_id === eventData.away_team_id);
    return { homeTeamLineup, awayTeamLineup };
  }, [data, eventData]);



  return (
    <MatchInfoWrapper>
      <h2>Информация о матче</h2>
      <MatchInfoViewModesWrapper>
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
          active={selectedMatchInfoViewMode === MatchInfoViewModes.H2H}
          mode={MatchInfoViewModes.H2H}
          onClick={() => setSelectedMatchInfoViewMode(MatchInfoViewModes.H2H)}
        >
          {MatchInfoViewModesTitle[MatchInfoViewModes.H2H]}
        </MatchInfoViewModeButton>
      </MatchInfoViewModesWrapper>
      <MatchInfoContent>
        {selectedMatchInfoViewMode === MatchInfoViewModes.LINEUPS && (homeTeamLineup && awayTeamLineup)  && (
          <MatchInfoLineup homeTeamLineup={homeTeamLineup} awayTeamLineup={awayTeamLineup} eventData={eventData}/>
        )}
      </MatchInfoContent>
    </MatchInfoWrapper>
  );
};

export default MatchInfo;
