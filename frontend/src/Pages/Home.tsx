import React from 'react';
import {Tweet} from "../components/Tweet";
import {
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper, TextField,
    Theme,
    Typography,
    withStyles,
} from '@material-ui/core';
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
            position: 'sticky',
            top: 0,
            maxWidth: 230,
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        sideNavListItem: {
            display: 'inline-block',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                display: 'block',
            },
            '&:hover div': {
                backgroundColor: 'rgba(29,161,242,0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '& div': {
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 20px 0 15px',
                borderRadius: 30,
                marginBottom: 15,
                height: 50,
                transition: 'all 250ms ease',
            },
            '&:last-of-type': {
                display: 'block',
            },
        },
        sideNavListItemLabel: {
            fontSize: 20,
            fontWeight: 700,
            marginLeft: 8,
        },
        sideNavListItemIcon: {
            fontSize: 32,
        },
        sideNavTweetButton: {
            padding: theme.spacing(3),
            marginTop: theme.spacing(2)
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
            display: 'flex',
            paddingTop: 15,
            paddingLeft: 20,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'rgb(245,248,250)'
            },
        },
        tweetAvatar: {
            width: theme.spacing(5),
            height: theme.spacing(5),
            marginRight: 15,
        },
        tweetFooter: {
            display: 'flex',
            position: 'relative',
            left: -10,
            justifyContent: 'space-between',
            maxWidth: 450,
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
        widgetSide: {
            position: 'sticky',
            top: 0,
            paddingTop: 20,
        },
        widgetSideBlock: {
            backgroundColor: '#F5F8FA',
            borderRadius: 15,
            marginTop: 20,
            '& .MuiList-root': {
                paddingTop: 0,
            },
        },
        widgetSideBlockHeader: {
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            backgroundColor: 'transparent',
            padding: '13px 18px',
            '& b': {
                fontSize: 20,
                fontWeight: 800,
            },
        },
        widgetSideBlockItem: {
            cursor: 'pointer',
            '& .MuiTypography-body1': {
                fontWeight: 700,
            },
            '& .MuiListItemAvatar-root': {
                minWidth: 50,
            },
            '& .MuiListItemText-root': {
                margin: 0,
            },
            "&:hover": {
                backgroundColor: '#edf3f6',
            },
        },
        addForm: {
            padding: 20,
        },
        addFormBody: {
            display: 'flex',
            width: '100%',
        },
        addFormBottom: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        addFormBottomActions: {
            marginTop: 10,
            paddingLeft: 70,
        },
        addFormTextarea: {
            width: '100%',
            border: 0,
            fontSize: 20,
            outlineWidth: '0',
            fontFamily: 'inherit',
            resize: 'none',
        },
        addFormBottomLine: {
            height: 12,
            backgroundColor: '#E6ECF0',
        },
        addFormCircleProgress: {
            position: 'relative',
            width: 20,
            height: 20,
            margin: '0 10px',
            '& .MuiCircularProgress-root': {
                position: 'absolute',
            },
        },
        addFormBottomRight: {
            display: 'flex',
            alignItems: 'center',
        },
    }
));


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
                        {...new Array(5).fill(
                            <Tweet
                                classes={classes}
                                user={{
                                    fullname: 'Матвей',
                                    username: 'realchamp',
                                    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
                                }}
                                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate dolores eum molestiae placeat, quaerat quam quisquam repellendus rerum sint.'/>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder="Поиск в Твиттере"/>
                </Grid>
            </Grid>
        </Container>
    );
};
