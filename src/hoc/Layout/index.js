
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'components/TopAppBar';
import Footer from 'components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: theme.custom.layout.maxAppWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100vh'
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.footerHeight}px)`,
    backgroundColor: theme.palette.background.main
  }
}));

const Layout = ({ children, layout, account }) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <TopAppBar layout={layout} />
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);