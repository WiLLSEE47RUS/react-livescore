import {FC} from 'react';
import {INavLink} from './NavLink.types';
import {LinkContent, LinkWrapper} from './NavLink.styled';

const NavLink: FC<INavLink> = (props) => {
  const {link, label, icon} = props;
  return (
    <LinkWrapper to={link}>
      <LinkContent>
        {icon}
        {label}
      </LinkContent>
    </LinkWrapper>
  );
};
export default NavLink;
