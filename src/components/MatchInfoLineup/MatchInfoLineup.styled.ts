import styled from 'styled-components';

export const TeamLineupInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  font-weight: 500;
  color: #142a50;
`;

export const TeamLineupConfirmationStatus = styled.h2<{ isConfirmed: boolean }>`
  color: ${props => props.isConfirmed ? 'var(--green)' : 'var(--lightRed)'};
  border-bottom: none;
`;

export const MatchInfoLineupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  column-gap: 15px;
`;
