import styled from 'styled-components';
import { H2HEventsWrapper } from '../H2HEvents/H2HEvents.styled';

export const MatchIncidentsWrapper = styled(H2HEventsWrapper)`
  display: flex;
  flex-direction: column;
`;

export const MatchIncident = styled.div<{ type: string, playerTeam: number }>`
  align-self: ${props => props.type === 'period' || props.type === 'injuryTime' 
    ? 'center' 
    : props.playerTeam === 1 
      ? 'flex-start' 
      : 'flex-end'
  };
  span{
    font-weight: 700;
  }
`;
