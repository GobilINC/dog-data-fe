
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  root: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing(4)
  },
  margin: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    cursor: 'pointer',
    fontFamily: 'Chaloops',
    color: theme.palette.text.hoverText,
    margin: `${theme.spacing(2)} !important`,
  },
  height: {
    paddingLeft: theme.spacing(1.5)
  }
}));

const TopAppBarLeft = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.margin} variant='body1'>
        LITE PAPER
      </Typography>
      <Typography className={classes.margin} variant='body1'>
        ONE PAGER
      </Typography>
      {/* <LogoWithTitle setOpen={setOpen} logoWidth={80} logoHeight={80} titleVariant={'h6'} className={classes.margin} /> */}
    </div>
  );
};

export default TopAppBarLeft;
