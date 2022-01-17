import {FC} from 'react';
import {INavLink} from './NavLink.types';
import {Content, LinkWrapper} from './NavLink.styled';

const NavLink: FC<INavLink> = (props) => {
  const {link, label, icon} = props;
  return (
    <LinkWrapper to={link}>
      <Content>
        {icon}
        {label}
      </Content>
    </LinkWrapper>
  );
};
export default NavLink;
