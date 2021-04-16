
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';
import TopAppBarMenuItem from './TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/links/top-menu-items';

// const useStyles = makeStyles(theme => ({
//   height: {
//     height: '100%'
//   },
//   LogoContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// }));
const DesktopMenu = () => {
  // const classes = useStyles();

  // const [open, setOpen] = useState(false);

  return (
    <>
      <TopAppBarLeft setOpen={false} />
      <TopAppBarMenuItem menuItems={TOP_BAR_MENUS} />
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
