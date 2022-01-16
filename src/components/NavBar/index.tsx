import { FC } from 'react';
import { INavBarProps } from './NavBar.types';
import { Wrapper } from './NavBar.styled';
import NavLink from '../NavLink';

const NavBar: FC<INavBarProps> = (props) => {
  const { linkObjects } = props;
  const links = linkObjects.map((el, index) => {
    return (
      <NavLink key={index} link={el.link} label={el.label} icon={el.icon} />
    );
  });
  return (
    <Wrapper>
      {links}
    </Wrapper>
  );
};
export default NavBar;
