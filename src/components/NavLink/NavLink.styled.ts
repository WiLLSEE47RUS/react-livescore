import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const LinkWrapper = styled(NavLink)`
  margin-left: 40px;
  height: 80%;
  max-width: 150px;
  padding: 0 15px;
  border-radius: 15px;
  transition: background 0.5s ease;
  :hover {
    background: #849cbc;
    a{
      color: #181818;
    }
  }
 
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const Content = styled.span`
  color: var(--navLinkColor);
  font-size: 1.25em;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
