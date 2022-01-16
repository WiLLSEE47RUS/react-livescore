import { ReactElement } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

export interface INavLink{
  link: string;
  label: string;
  icon: ReactElement<OverridableComponent<SvgIconTypeMap> & { muiName: string }>;
}
