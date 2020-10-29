import React from 'react';
import {Tweet} from "../components/Tweet";
import {
    Grid,
    IconButton,
    makeStyles,
    Typography,
    Container,
    InputBase,
    withStyles,
    createStyles,
    Paper, Theme,
} from '@material-ui/core';
import {
    Twitter,
    Search,
    NotificationsOutlined,
    EmailOutlined,
    BookmarkBorder,
    ListAlt,
    PersonOutline,
} from '@material-ui/icons/';
import grey from '@material-ui/core/colors/grey'
import {SideMenu} from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideNavList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideNavListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideNavListItemLabel: {
        fontSize: 20,
        fontWeight: 700,
        marginLeft: 8,
    },
    sideNavListItemIcon: {
        fontSize: 28,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '15px 15px',

        '& h6': {
            fontWeight: 800
        },
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)'
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -10,
        justifyContent: 'space-between',
        width: 450,
    },
    tweetFooterIcon: {
        '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)'
        },
        '&:hover .tweetFooterIcon': {
            fill: 'rgba(29,161,242,0.1)'
        }
    },
    tweetUserName: {
        color: grey[500]
    },
}));

const SearchTextField = withStyles(() => createStyles({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 45,
        padding: '0 12px',
        marginTop: 10,
    },
}))(InputBase);

export const Home: React.FC = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper}
                           style={{height: '100%'}} variant='outlined'>
                        <Paper className={classes.tweetsHeader}
                               variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Tweet
                            classes={classes}
                            user={{
                                fullname: 'Матвей',
                                username: 'realchamp',
                                avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
                            }}
                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate dolores eum molestiae placeat, quaerat quam quisquam repellendus rerum sint.'/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder="Поиск в Твиттере"/>
                </Grid>
            </Grid>
        </Container>
    );
};
