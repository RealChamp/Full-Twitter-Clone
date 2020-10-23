import React from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Container,
  InputBase,
  withStyles,
  createStyles,
  Paper,
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

export const useHomeStyles = makeStyles((theme) => ({
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
          fontWeight: 700
      }
  }
}));

const SearchTextField = withStyles(() => createStyles({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 45,
        padding: '0 12px',
    },
}))(InputBase);

export const Home: React.FC = () => {
  const classes = useHomeStyles();
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ul className={classes.sideNavList}>
            <li className={classes.sideNavListItem}>
              <IconButton className={classes.logo} color="primary">
                <Twitter className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <Search className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Поиск
              </Typography>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <NotificationsOutlined className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <EmailOutlined className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <BookmarkBorder className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Закладки
              </Typography>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <ListAlt className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Список
              </Typography>
            </li>
            <li className={classes.sideNavListItem}>
              <IconButton>
                <PersonOutline className={classes.sideNavListItemIcon} />
              </IconButton>
              <Typography className={classes.sideNavListItemLabel} variant="h6">
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} style={{height: '100%'}} variant='outlined'>
              <Paper className={classes.tweetsHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск в Твиттере" />
        </Grid>
      </Grid>
    </Container>
  );
};
