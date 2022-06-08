import styled from 'styled-components';
import { H2HEventsWrapper } from '../H2HEvents/H2HEvents.styled';
import { MatchInfoViewModeButton, MatchInfoViewModesWrapper } from '../MatchInfo/MatchInfo.styled';

export const MatchStatisticsWrapper = styled(H2HEventsWrapper)`
  
`;

export const MatchStatisticsViewModeWrapper = styled(MatchInfoViewModesWrapper)``;

export const MatchStatisticsViewModeButton = styled(MatchInfoViewModeButton)`
  color: ${props => !props.active ? 'var(--lightGray)' : 'var(--white)'};
  background-color: ${props => !props.active ? 'var(--gray)' : 'var(--darkBlue)'};
`;

export const MatchStatisticsInfoItem = styled.div`
  width: 100%;
  height: 32px;
  display: grid;
  grid-template-columns: 1fr 450px 1fr;
  justify-items: center;
  align-items: center;
  color: var(--midGray);
  font-weight: 400;  
  .name {
    font-weight: 700;
  }
  &:not(:last-child){
    border-bottom: 1px solid var(--midGray);
  }
`;
