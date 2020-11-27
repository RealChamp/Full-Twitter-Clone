import React from 'react';
import { Tweet } from '../components/Tweet';
import classNames from 'classnames';
import {
  Avatar,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
  withStyles,
  TextareaAutosize,
  CircularProgress,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { SideMenu } from '../components/SideMenu';
import { ImageOutlined, SentimentSatisfiedOutlined, Search, PersonAdd } from '@material-ui/icons';

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
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
  },
  tweetsHeader: {
    // position: 'sticky',
    // top: '0',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '15px 15px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweet: {
    display: 'flex',
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
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
      backgroundColor: 'rgba(29,161,242,0.1)',
    },
    '&:hover .tweetFooterIcon': {
      fill: 'rgba(29,161,242,0.1)',
    },
  },
  tweetUserName: {
    color: grey[500],
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
    '&:hover': {
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
}));

const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} style={{ height: '100%' }} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <div className={classes.addFormBody}>
                  <Avatar
                    className={classes.tweetAvatar}
                    alt={`аватар пользователя`}
                    src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                  />
                  <TextareaAutosize
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                  />
                </div>
                <div className={classes.addFormBottom}>
                  <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                      <ImageOutlined />
                    </IconButton>
                    <IconButton color="primary">
                      <SentimentSatisfiedOutlined />
                    </IconButton>
                  </div>
                  <div className={classes.addFormBottomRight}>
                    <span>280</span>
                    <div className={classes.addFormCircleProgress}>
                      <CircularProgress variant="static" size={20} thickness={4} value={20} />
                      <CircularProgress
                        style={{ color: 'rgba(0,0,0,0.1)' }}
                        variant="static"
                        size={20}
                        thickness={4}
                        value={100}
                      />
                    </div>
                    <Button color="primary" variant="contained">
                      Твитнуть
                    </Button>
                  </div>
                </div>
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {...new Array(8).fill(
              <Tweet
                classes={classes}
                user={{
                  fullname: 'Матвей',
                  username: 'realchamp',
                  avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                }}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate dolores eum molestiae placeat, quaerat quam quisquam repellendus rerum sint."
              />,
            )}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.widgetSide}>
            <SearchTextField
              placeholder="Поиск по Твиттеру"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.widgetSideBlock}>
              <Paper className={classes.widgetSideBlockHeader} variant="outlined">
                <b>Актуальные Темы</b>
              </Paper>
              <List>
                <ListItem className={classes.widgetSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 211
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.widgetSideBlockItem}>
                  <ListItemText
                    primary="#Короновирус"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 121 551
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.widgetSideBlockItem}>
                  <ListItemText
                    primary="Москва"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 12 966
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.widgetSideBlock}>
              <Paper className={classes.widgetSideBlockHeader} variant="outlined">
                <b>Кого Читать</b>
              </Paper>
              <List>
                <ListItem className={classes.widgetSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Matthew TheGreat"
                      src="https://uifaces.co/our-content/donated/N5PLzyan.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Purple Garden"
                    secondary={
                      <Typography component="span" variant="body2">
                        @PurpleGad
                      </Typography>
                    }
                  />
                  <Button color="primary"><PersonAdd/></Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
