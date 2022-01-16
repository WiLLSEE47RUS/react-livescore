import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 40px;
  height: 80%;
  max-width: 150px;
  padding: 0 15px;
  border-radius: 15px;

  :hover {
    background: #849cbc;
    a{
      color: #181818;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.a`
  color: var(--navLinkColor);
  font-size: 1.25em;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
