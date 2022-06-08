import React, { FC, useMemo } from 'react';
import { MatchInfoLineupWrapper, TeamLineupConfirmationStatus, TeamLineupInfo } from './MatchInfoLineup.styled';
import { Divider, FlexContainer } from '../common/common.styled';
import GroupsIcon from '@mui/icons-material/Groups';
import ProgressBar from '../common/ProgressBar';
import TeamLineupTable from '../TeamLineUpTable';
import { lineupsPositionsShortNaming } from '../../constants/lineups.constants';
import { ILineupModel } from '../../model/lineup.model';
import { IEvent } from '../../model/events.model';

const MatchInfoLineup: FC<{ homeTeamLineup: ILineupModel, awayTeamLineup: ILineupModel, eventData: IEvent }>
  = ({ homeTeamLineup, awayTeamLineup, eventData }) => {

    const homeTeamLineupRows = useMemo(() => {
      return homeTeamLineup?.lineup_players.filter(player => !player.substitute).map(lineupPlayer => ({
        id: lineupPlayer.player.id,
        shirt_number: lineupPlayer.player.shirt_number,
        name: lineupPlayer.player.name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        position: lineupsPositionsShortNaming[eventData.sport.slug][lineupPlayer.player.position],
        age: lineupPlayer.player.age,
        rating: lineupPlayer.player.rating,
      })) || [];
    }, [homeTeamLineup, eventData.sport.slug]);

    const awayTeamLineupRows = useMemo(() => {
      return awayTeamLineup?.lineup_players.filter(player => !player.substitute).map(lineupPlayer => ({
        id: lineupPlayer.player.id,
        shirt_number: lineupPlayer.player.shirt_number,
        name: lineupPlayer.player.name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        position: lineupsPositionsShortNaming[eventData.sport.slug][lineupPlayer.player.position],
        age: lineupPlayer.player.age,
        rating: lineupPlayer.player.rating,
      })) || [];
    }, [awayTeamLineup, eventData.sport.slug]);

    const homeTeamLineupSubstitutionRows = useMemo(() => {
      return homeTeamLineup?.lineup_players.filter(player => player.substitute).map(lineupPlayer => ({
        id: lineupPlayer.player.id,
        shirt_number: lineupPlayer.player.shirt_number,
        name: lineupPlayer.player.name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        position: lineupsPositionsShortNaming[eventData.sport.slug][lineupPlayer.player.position],
        age: lineupPlayer.player.age,
        rating: lineupPlayer.player.rating,
      })) || [];
    }, [homeTeamLineup, eventData.sport.slug]);

    const awayTeamLineupSubstitutionRows = useMemo(() => {
      return awayTeamLineup?.lineup_players.filter(player => player.substitute).map(lineupPlayer => ({
        id: lineupPlayer.player.id,
        shirt_number: lineupPlayer.player.shirt_number,
        name: lineupPlayer.player.name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        position: lineupsPositionsShortNaming[eventData.sport.slug][lineupPlayer.player.position],
        age: lineupPlayer.player.age,
        rating: lineupPlayer.player.rating,
      })) || [];
    }, [awayTeamLineup, eventData.sport.slug]);

    return (
      <MatchInfoLineupWrapper>
        <TeamLineupInfo>
          <FlexContainer ai='center' cg='15px'>
            <FlexContainer ai='center' rg='5px' fd='column'>
              {homeTeamLineup?.formation || 'Н/Д'}
              <FlexContainer ai='center'><GroupsIcon /> Схема состава</FlexContainer>
            </FlexContainer>
            <FlexContainer ai='center' rg='5px' fd='column'>
              {homeTeamLineup?.avg_rating || 'Н/Д'}
              <FlexContainer ai='center'>Средний рейтинг</FlexContainer>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer ai='center' cg='10px' style={{ height: '40px', width: '100%' }}>
            {homeTeamLineup?.attacking && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={homeTeamLineup.attacking} />
                <FlexContainer ai='center'>Атака</FlexContainer>
              </FlexContainer>
            )}
            {homeTeamLineup?.technical && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={homeTeamLineup.technical} />
                <FlexContainer ai='center'>Техника</FlexContainer>
              </FlexContainer>
            )}
            {homeTeamLineup?.defending && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={homeTeamLineup.defending} />
                <FlexContainer ai='center'>Защита</FlexContainer>
              </FlexContainer>
            )}
            {homeTeamLineup?.tactical && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={homeTeamLineup.tactical} />
                <FlexContainer ai='center'>Тактика</FlexContainer>
              </FlexContainer>
            )}
            {homeTeamLineup?.creativity && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={homeTeamLineup.creativity} />
                <FlexContainer ai='center'>Креативность</FlexContainer>
              </FlexContainer>
            )}
          </FlexContainer>
          <TeamLineupConfirmationStatus isConfirmed={!!homeTeamLineup?.is_confirmed}>
            Стартовый состав {homeTeamLineup?.is_confirmed ? '' : 'не '}подтвержден
          </TeamLineupConfirmationStatus>
          <TeamLineupTable rows={homeTeamLineupRows} />
          <h2>Замены:</h2>
          <TeamLineupTable rows={homeTeamLineupSubstitutionRows} />
        </TeamLineupInfo>
        <Divider />
        <TeamLineupInfo>
          <FlexContainer ai='center' cg='10px'>
            <FlexContainer ai='center' rg='5px' fd='column' jc='center'>
              {awayTeamLineup?.formation || 'Н/Д'}
              <FlexContainer ai='center'><GroupsIcon /> Схема состава</FlexContainer>
            </FlexContainer>
            <FlexContainer ai='center' rg='5px' fd='column'>
              {awayTeamLineup?.avg_rating || 'Н/Д'}
              <FlexContainer ai='center'>Средний рейтинг</FlexContainer>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer ai='center' cg='10px' style={{ height: '40px', width: '100%' }}>
            {awayTeamLineup?.attacking && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={awayTeamLineup.attacking} />
                <FlexContainer ai='center'>Атака</FlexContainer>
              </FlexContainer>
            )}
            {awayTeamLineup?.technical && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={awayTeamLineup.technical} />
                <FlexContainer ai='center'>Техника</FlexContainer>
              </FlexContainer>
            )}
            {awayTeamLineup?.defending && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={awayTeamLineup.defending} />
                <FlexContainer ai='center'>Защита</FlexContainer>
              </FlexContainer>
            )}
            {awayTeamLineup?.tactical && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={awayTeamLineup.tactical} />
                <FlexContainer ai='center'>Тактика</FlexContainer>
              </FlexContainer>
            )}
            {awayTeamLineup?.creativity && (
              <FlexContainer ai='center' rg='5px' fd='column'>
                <ProgressBar percent={awayTeamLineup.creativity} />
                <FlexContainer ai='center'>Креативность</FlexContainer>
              </FlexContainer>
            )}
          </FlexContainer>
          <TeamLineupConfirmationStatus isConfirmed={!!awayTeamLineup?.is_confirmed}>
            Стартовый состав {homeTeamLineup?.is_confirmed ? '' : 'не '}подтвержден
          </TeamLineupConfirmationStatus>
          <TeamLineupTable rows={awayTeamLineupRows} />
          <h2>Замены:</h2>
          <TeamLineupTable rows={awayTeamLineupSubstitutionRows} />
        </TeamLineupInfo>
      </MatchInfoLineupWrapper>
    );
  };

export default MatchInfoLineup;
