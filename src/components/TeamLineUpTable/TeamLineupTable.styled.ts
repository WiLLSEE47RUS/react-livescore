import styled from 'styled-components';

export const TeamLineUpTableWrapper = styled.div`
  width: 100%;
  background: var(--midGrayTP);
  border-radius: 5px;
  padding: 5px;
  color: var(--darkGray);
`;

export const TeamLineUpGridTemplate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 250px 100px 100px 100px;
  justify-items: center;
  span:not(:last-child){
    display: block;
    width: 100%;
    text-align: center;
    border-right: 1px solid var(--darkGray);
  }
  :nth-child(odd) {
    background-color: var(--lightGray);
  }
`;

export const TeamLineUpHeader = styled(TeamLineUpGridTemplate)`
  background-color: var(--gray);
`;
