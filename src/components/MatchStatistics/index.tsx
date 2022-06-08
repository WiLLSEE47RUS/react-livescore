import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  MatchStatisticsInfoItem,
  MatchStatisticsViewModeButton,
  MatchStatisticsViewModeWrapper,
  MatchStatisticsWrapper,
} from './MatchStatistics.styled';
import { useGetEventStatisticsByIdQuery } from '../../services/api';
import { EventPeriodsTranslations, EventStatisticsNameTranslations } from '../../constants/events.constants';
import { groupBy } from '../../utils/common';

const MatchStatistics: FC<{ eventId: number }> = ({ eventId }) => {
  const { data } = useGetEventStatisticsByIdQuery(eventId);
  const statistics = useMemo(() => data && [...data.data] || [], [data]);
  const statisticsViewModes = useMemo(() => [...new Set(statistics.map(el => el.period))], [statistics]);
  const [selectedMatchInfoViewMode, setSelectedMatchInfoViewMode] = useState<string | null>(null);

  useEffect(() => {
    setSelectedMatchInfoViewMode(statisticsViewModes[0]);
  }, [statisticsViewModes]);

  const statisticsToView = useMemo(() => {
    const filteredStats = statistics.filter(stat => stat.period === selectedMatchInfoViewMode);
    return Object.values(groupBy(filteredStats, el => el.group)).flat();
  },
  [statisticsViewModes, selectedMatchInfoViewMode, statistics]
  );

  return (
    <MatchStatisticsWrapper>
      <MatchStatisticsViewModeWrapper>
        {statisticsViewModes.map(el => (
          <MatchStatisticsViewModeButton
            active={selectedMatchInfoViewMode === el}
            onClick={() => setSelectedMatchInfoViewMode(el)}
            key={el}
          >
            {EventPeriodsTranslations[el]}
          </MatchStatisticsViewModeButton>
        ))}
      </MatchStatisticsViewModeWrapper>
      {statisticsToView.map(el => (
        <MatchStatisticsInfoItem key={el.name}>
          <div style={{ backgroundColor: el.compare_code === 1  ? 'var(--blue)' : 'none', padding: '0 5px', borderRadius: '4px' }}>
            {el.home}
          </div>
          <div className='name'>{EventStatisticsNameTranslations[el.name]}</div>
          <div style={{ backgroundColor: el.compare_code === 2 ? 'var(--blue)' : 'none', padding: '0 5px', borderRadius: '4px' }}>
            {el.away}
          </div>
        </MatchStatisticsInfoItem>
      ))}
    </MatchStatisticsWrapper>
  );
};

export default MatchStatistics;
