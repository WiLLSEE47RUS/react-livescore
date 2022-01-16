import React from 'react';
import { Content, Wrapper, Logo } from './Header.styled';
import logo from '../../assets/header/logo.png';
import NavBar from '../NavBar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Header(): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt='logo' />
        <NavBar linkObjects={[
          {
            link: '/',
            label: 'События',
            icon: <SportsSoccerIcon />,
          },
          {
            link: '/favourites',
            label: 'Избранное',
            icon: <StarBorderIcon />,
          },
        ]} />
      </Content>
    </Wrapper>
  );
}

export default Header;
