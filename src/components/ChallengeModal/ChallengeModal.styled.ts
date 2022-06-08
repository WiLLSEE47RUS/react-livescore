import styled from 'styled-components';
import { EventHeaderWrapper, EventsHeaderDivider, EventWrapper } from '../Event/Event.styled';
import { MatchInfoViewModesWrapper } from '../MatchInfo/MatchInfo.styled';
import { FlexContainer } from '../common/common.styled';

export const ChallengeWrapper = styled(EventWrapper)``;
export const ChallengeHeaderWrapper = styled(EventHeaderWrapper)`
  img{ 
    height: 32px;
    width: 32px;
  }
`;
export const ChallengeHeaderDivider = styled(EventsHeaderDivider)``;
export const ChallengeSeasonsWrapper = styled(MatchInfoViewModesWrapper)``;
export const ChallengeSeasonButton = styled.div<{ active?: boolean }>`
  display: flex;
  min-height: 40px;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
  color: ${props => !props.active ? 'var(--lightGray)' : 'var(--darkGray)'};
  font-weight: 700;
  background-color: ${props => !props.active ? 'var(--gray)' : 'var(--activeLinkBackground)'};
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease;
  border-radius: 4px;
`;

export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: 605px 1fr;
  grid-gap: 20px;
  align-items: start;
  justify-items: end;
`;
export const ChallengeSeasonTableGrid = styled.div`
  display: grid;
  grid-template-columns: 605px; 
  grid-gap: 20px;
`;
export const ChallengeSeasonTableGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 50px 300px 40px 40px 40px 40px 50px 50px;
  align-items: center;
  color: var(--midGray);
  img {
    height: 32px;
  }
  border-bottom: 1px solid var(--midGray);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--midGray);
  }
`;

export const InfoDataFlex = styled(FlexContainer)`
  width: 100%;
  color: #212529;
  font-size: 20px;
  span{
    &:last-child {
      font-weight: 700;
    }
  }
`;
