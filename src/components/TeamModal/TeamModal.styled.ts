import styled from 'styled-components';
import { EventHeaderWrapper, EventsHeaderDivider, EventWrapper } from '../Event/Event.styled';

export const TeamWrapper = styled(EventWrapper)``;
export const TeamHeaderWrapper = styled(EventHeaderWrapper)`
  font-size: 32px;
  font-weight: 700;
  img{ 
    height: 48px;
    width: 48px;
  }
  height: 48px;
`;

export const TeamGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: start;
  justify-items: end;
  background: var(--lightGray);
  padding: 5px;
`;

export const TeamDataInfo = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  row-gap: 10px;
  border: 1px solid #333;
  color: #333;
  span{
    font-size: 20px;
  }
  span:first-child {
    font-weight: 700;
  }
`;

