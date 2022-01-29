import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  border-bottom: 1px #eeeeee10 solid;
  a{
    display: flex;
    height:100%;
    padding: 0 40px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--navLinkColor);
    transition: all 0.5s ease;
    :hover{
      background: #eeeeee20;
    }
  }
  .active{
    background: #eeeeee10;
  }
`;
