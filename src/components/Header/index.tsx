import React from 'react';
import {HeaderContent, HeaderWrapper, Logo} from './Header.styled';
import logo from '../../assets/header/logo.svg';
import NavBar from '../NavBar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo src={logo} alt="logo"/>
        <NavBar linkObjects={[
          {
            link: '/events',
            label: 'События',
            icon: <SportsSoccerIcon/>,
          },
          {
            link: '/favourites',
            label: 'Избранное',
            icon: <StarBorderIcon/>,
          },
          {
            link: '/news',
            label: 'Новости',
            icon: <NewspaperIcon/>,
          },
        ]}/>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
