import React, { useMemo, useState } from 'react';
import { TeamDataInfo, TeamGrid, TeamHeaderWrapper, TeamWrapper } from './TeamModal.styled';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetTeamEventsByIdQuery, useGetTeamDataByIdQuery, useGetTeamLineupsByIdQuery } from '../../services/api';
import { teamModalSelector, teamModalActions } from '../../store/teamModal/teamModal.slice';
import { getTranslations } from '../../utils/translations';
import { Box, Modal } from '@mui/material';
import { Spinner } from '../Spinner';
import EventItem from '../EventItem';
import { FlexContainer } from '../common/common.styled';
import GroupsIcon from '@mui/icons-material/Groups';
import ProgressBar from '../common/ProgressBar';
import { TeamLineupConfirmationStatus, TeamLineupInfo } from '../MatchInfoLineup/MatchInfoLineup.styled';
import TeamLineupTable from '../TeamLineUpTable';
import { lineupsPositionsShortNaming } from '../../constants/lineups.constants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1340,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'text.primary',
  zIndex: 15555,
  overflow: 'auto',
};

const TeamModal = () => {
  const { teamId, isOpen } = useAppSelector(teamModalSelector);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(teamModalActions.closeChallengeModal());
  };

  const { data } = useGetTeamDataByIdQuery(teamId, { skip: !teamId });
  const { data: eventsResponse } = useGetTeamEventsByIdQuery(teamId, { skip: !teamId });
  const eventsData = useMemo(() => eventsResponse?.data || [], [eventsResponse]);

  const { data: lineupsResponse } = useGetTeamLineupsByIdQuery(teamId, { skip: !teamId });
  const homeTeamLineup = useMemo(() => lineupsResponse?.data.find(lineup => lineup.is_confirmed), [lineupsResponse]);

  const teamData = useMemo(() => data?.data, [data]);

  const homeTeamLineupRows = useMemo(() => {
    return homeTeamLineup?.lineup_players.map(lineupPlayer => ({
      id: lineupPlayer.player.id,
      shirt_number: lineupPlayer.player.shirt_number,
      name: lineupPlayer.player.name,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      position: lineupsPositionsShortNaming[eventsData[0]?.sport?.slug]
        && lineupsPositionsShortNaming[eventsData[0]?.sport?.slug][lineupPlayer.player.position] || 'Н/Д',
      age: lineupPlayer.player.age,
      rating: lineupPlayer.player.rating,
    })) || [];
  }, [homeTeamLineup, eventsData[0]?.sport.slug]);


  if (!teamData) return <Spinner width='50px' />;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        <TeamWrapper>
          <TeamHeaderWrapper>
            <img src={teamData.logo} alt='logo' />
            <span>{getTranslations(teamData)}</span>
          </TeamHeaderWrapper>
          <TeamGrid>
            <div>
              <h2 style={{ background: 'var(--lightGray)', textAlign: 'center', color: '#353535'}}>Данные команды:</h2>
              <TeamDataInfo>
                <h3>Тренер</h3>
                <img src={teamData?.manager?.photo} alt='photo' />
                <h4>{getTranslations(teamData.manager)}</h4>
                <FlexContainer>
                  <FlexContainer fd="column" rg="5px" ai="center">
                    <span>{teamData?.manager?.nationality_code}</span>
                    <span>Национальность</span>
                  </FlexContainer>
                  {teamData?.manager?.date_birth && (
                    <FlexContainer fd='column' rg='5px' ai='center'>
                      <span>{teamData?.manager?.date_birth}</span>
                      <span>Дата рождения</span>
                    </FlexContainer>
                  )}
                  <FlexContainer fd="column" rg="5px" ai="center">
                    <span>{teamData?.manager?.preferred_formation}</span>
                    <span>Любимая схема</span>
                  </FlexContainer>
                </FlexContainer>
                <TeamLineupInfo>
                  <h3>Состав команды</h3>
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
                  <TeamLineupTable rows={homeTeamLineupRows} />
                </TeamLineupInfo>
              </TeamDataInfo>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(15px)', height: '100%'}}>
              <h2 style={{ background: 'var(--lightGray)', textAlign: 'center', color: '#353535'}}>
                События команды:
              </h2>
              {eventsData.map(el => <EventItem event={el} key={el.id}/>)}
            </div>
          </TeamGrid>
        </TeamWrapper>
      </Box>
    </Modal>
  );
};

export default TeamModal;
