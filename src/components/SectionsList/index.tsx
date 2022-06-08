import React, { FC, useMemo } from 'react';
import { SectionItem, SectionsListContainer } from './SectionsList.styled';
import { Tooltip } from '@mui/material';
import { getTranslations } from '../../utils/translations';
import { Spinner } from '../Spinner';
import { setSelectedSection } from '../../store/events/events.slice';
import { useGetSectionsBySportIdQuery } from '../../services/api';
import { useAppDispatch, useAppSelector } from '../../store';

const SectionsList: FC<{ sportId: number }> = ({ sportId }) => {
  const { data, isLoading: isSectionsLoading, isFetching: isSectionsFetching } = useGetSectionsBySportIdQuery(sportId);
  const { selectedSectionId } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();
  const sections = useMemo(() =>
    data && [...data.data]
      .sort((a, b) => a.name_translations.ru && b.name_translations.ru
        ? a.name_translations.ru.localeCompare(b?.name_translations?.ru) : a.name.localeCompare(b.name))
    || [], [data]);

  const handleSelectSection = (id: number) => {
    dispatch(setSelectedSection(id));
  };

  return (
    <SectionsListContainer>
      {!isSectionsLoading && !isSectionsFetching ? sections.map(section => (
        <Tooltip
          key={section.slug}
          title={'Выбрать категорию: ' + getTranslations(section)}
          placement="top-end"
        >
          <SectionItem
            onClick={() => handleSelectSection(section.id)}
            isActive={section.id === selectedSectionId}
          >
            <span className={`flags flags--category flags--md flags--${section.flag}`} />
            {getTranslations(section)}
          </SectionItem>
        </Tooltip>
      )) : <Spinner width='50' />}
    </SectionsListContainer>
  );
};

export default SectionsList;
