import React, { FC, useMemo, useState } from 'react';
import { Box, Modal, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  useGetChallengeDataByIdQuery,
  useGetSeasonsByLeagueIdQuery, useGetSeasonsEventsByIdQuery,
  useGetSeasonsTableByIdQuery,
} from '../../services/api';
import { Spinner } from '../Spinner';
import { getTranslations } from '../../utils/translations';
import { challengeModalActions, challengeModalSelector } from '../../store/challengeModal/challengeModal.slice';
import { ILeague } from '../../model/league.model';
import {
  ChallengeGrid,
  ChallengeHeaderDivider,
  ChallengeHeaderWrapper, ChallengeSeasonButton,
  ChallengeSeasonsWrapper, ChallengeSeasonTableGrid, ChallengeSeasonTableGridTemplate,
  ChallengeWrapper, InfoDataFlex,
} from './ChallengeModal.styled';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  EventTableNameTranslations,
  EventTypesBackgroundColors,
  EventTypesTranslations,
} from '../../constants/events.constants';
import { FlexContainer } from '../common/common.styled';
import EventItem from '../EventItem';

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

const ChallengeModal: FC = () => {
  const { challengeId, isOpen } = useAppSelector(challengeModalSelector);
  const dispatch = useAppDispatch();
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const handleClose = () => {
    dispatch(challengeModalActions.closeChallengeModal());
  };

  const { data, isLoading, isFetching } = useGetChallengeDataByIdQuery(challengeId, { skip: !challengeId });
  const { data: seasonsResponse } = useGetSeasonsByLeagueIdQuery(challengeId, { skip: !challengeId });
  const { data: tableResponse } = useGetSeasonsTableByIdQuery(selectedSeason, { skip: !selectedSeason });
  const { data: eventsResponse } = useGetSeasonsEventsByIdQuery(selectedSeason, { skip: !selectedSeason });

  const challengeData = useMemo(() => data?.data, [data]);
  const seasonsData = useMemo(() => seasonsResponse?.data || [], [seasonsResponse]);
  const tableData = useMemo(() => tableResponse?.data || [], [tableResponse]);
  const eventsData = useMemo(() => eventsResponse?.data || [], [eventsResponse]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
  let isEventInFavourites = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]').some(el => el.id === challengeId);

  const handleAddToFavourites = () => {
    if (!challengeData) return;
    const currentFavourites: ILeague[] = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]');
    currentFavourites.push(challengeData);
    localStorage.setItem('favouritesLeagues', JSON.stringify(currentFavourites));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    isEventInFavourites = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]').some(el => el.id === challengeId);
  };

  const handleDeleteFromFavourites = () => {
    if (!challengeData) return;
    const currentFavourites: ILeague[] = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]');
    const newFavourites = currentFavourites.filter(el => el.id !== challengeId);
    localStorage.setItem('favouritesLeagues', JSON.stringify(newFavourites));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    isEventInFavourites = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]').some(el => el.id === challengeId);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        {!isLoading && !isFetching && challengeData ? (
          <ChallengeWrapper>
            <ChallengeHeaderWrapper>
              <Tooltip
                title={isEventInFavourites ? 'Удалить лигу из избранного' : 'Добавить лигу в избранное'}
                placement='top-end'
                style={{ cursor: 'pointer', color: isEventInFavourites ? 'gold' : 'inherit', fontSize: '32px' }}
              >
                <StarBorderIcon onClick={isEventInFavourites ? handleDeleteFromFavourites : handleAddToFavourites} />
              </Tooltip>
              <ChallengeHeaderDivider />
              <img src={challengeData.logo} alt='logo' />
              <span>{getTranslations(challengeData)}</span>
            </ChallengeHeaderWrapper>
            <ChallengeSeasonsWrapper>
              {seasonsData.map(el => (
                <ChallengeSeasonButton
                  key={el.slug}
                  active={selectedSeason === el.id}
                  onClick={() => setSelectedSeason(el.id)}
                >
                  {el.slug}
                </ChallengeSeasonButton>
              ))}
            </ChallengeSeasonsWrapper>
            <ChallengeGrid>
              <div>
                <h2>Таблицы:</h2>
                <ChallengeSeasonTableGrid>
                  {tableData.map(table => (
                    <div style={{ background: 'var(--lightGray)' }}>
                      <ChallengeSeasonTableGridTemplate style={{ fontWeight: 700 }}>
                        <span>#</span>
                        <span>Команды</span>
                        {Object.values(table.total_keys).map(el => <span>{EventTableNameTranslations[el]}</span>)}
                      </ChallengeSeasonTableGridTemplate>
                      {table.standings_rows.map(row => (
                        <ChallengeSeasonTableGridTemplate>
                          <span>{row.position}</span>
                          <span>
                            {row.team.has_logo && <img src={row.team.logo} alt='logo' />}
                            {getTranslations(row.team)}
                          </span>
                          <span>{row.fields.matches_total}</span>
                          <span>{row.fields.wins_total}</span>
                          <span>{row.fields.draws_total}</span>
                          <span>{row.fields.losses_total}</span>
                          <span>{row.fields.goals_total}</span>
                          <span>{row.fields.points_total}</span>
                        </ChallengeSeasonTableGridTemplate>
                      ))}
                    </div>
                  ))}
                </ChallengeSeasonTableGrid>
              </div>
              <FlexContainer fd="column" ai="flex-start" jc="center" rg="10px" style={{ width: '100%', marginTop: '28px'}}>
                <FlexContainer fd="column" ai="flex-start" jc="center" rg="10px" style={{ width: '100%', padding: '5px', background: '#f4f6fa', color: '#212529'}}>
                  <h2 style={{ borderBottom: '1px solid var(--midGray)', width: '100%', textAlign: 'center'}}>Данные турнира:</h2>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Голов в среднем</span>
                    <span>2.34</span>
                  </InfoDataFlex>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Побед хозяев</span>
                    <span>32%</span>
                  </InfoDataFlex>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Ничьих</span>
                    <span>27%</span>
                  </InfoDataFlex>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Побед гостей</span>
                    <span>41%</span>
                  </InfoDataFlex>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Желтые карточки в среднем за матч</span>
                    <span>3.90</span>
                  </InfoDataFlex>
                  <InfoDataFlex jc="space-between" ai="center">
                    <span>Красные карточки в среднем за матч</span>
                    <span>0.10</span>
                  </InfoDataFlex>
                </FlexContainer>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(15px)', height: '100%'}}>
                  <h2 style={{ background: 'var(--lightGray)', textAlign: 'center', color: '#353535'}}>
                    События турнира:
                  </h2>
                  {eventsData.map(el => <EventItem event={el} key={el.id}/>)}
                </div>
              </FlexContainer>
            </ChallengeGrid>
          </ChallengeWrapper>
        ) : (
          <Spinner width='50' />
        )}
      </Box>
    </Modal>
  );
};

export default ChallengeModal;
