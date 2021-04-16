
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        [theme.breakpoints.down(360)]: {
            flexDirection: 'column',
        },
        minHeight: theme.custom.layout.footerHeight,
        maxWidth: theme.custom.layout.topBarMaxWidth,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Typography variant='h6' style={{ fontFamily: 'Chaloops' }}> Footer Area </Typography>
        </footer>
    );
};

export default Footer;
