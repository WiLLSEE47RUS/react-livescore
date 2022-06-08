import styled from 'styled-components';

export const NewsWrapper = styled.div`
  height: calc(100vh - 10vh);
  padding-top: 15px;
`;

export const NewsContent = styled.main`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  max-height: calc(100vh - 15vh);
  gap: 15px;
`;
export const NewsGridItem = styled.div`
  cursor: pointer;
  height: fit-content;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  grid-template-areas:     
            "i i i i"
            "i i i i"
            "t t t t"
            "d d d d";
  img{
    grid-area: i;
    width: 100%;
  }
  h2{
    grid-area: t;
    border-bottom: 1px solid white;
  }
  &:hover{
    p{
      display: block;
    }
  }
  transition: all 0.5s ease;
  p{
    margin-top: 5px;
    grid-area: d;
    display: none;
    font-size: 18px;
    color: var(--lightGray);
  }
`;
