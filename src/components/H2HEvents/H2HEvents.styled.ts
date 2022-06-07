import styled from 'styled-components';
import { EventItem, TeamInfo } from '../EventsList/EventsList.styled';

export const H2HEventsWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 20px;
  background-color: var(--midGrayTP);
  color: var(--midGray);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: inherit;
    border-bottom: 1px solid var(--midGray);
    margin: 5px 0;
  }
`;

export const H2HEventItem = styled(EventItem)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--midGray);
  }
`;

export const H2HTeamInfo = styled(TeamInfo)`
  color: var(--midGray);
`;
