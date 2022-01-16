import { FC } from 'react';
import { INavLink } from './NavLink.types';
import { Content, Wrapper } from './NavLink.styled';

const NavLink: FC<INavLink> = (props) => {
  const { link, label, icon } = props;
  return (
    <Wrapper>
      <Content href={link}>
        {icon}
        {label}
      </Content>
    </Wrapper>
  );
};
export default NavLink;
