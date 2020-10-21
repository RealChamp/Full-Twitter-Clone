import React from 'react';
import { makeStyles, Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Twitter, Search, PeopleOutline, MessageOutlined, Close } from '@material-ui/icons/';
import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    backgroundColor: '#71c9f8',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '53%',
    transform: 'translate(-50%,-50%)',
    width: '350%',
    height: '350%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 380,
    width: '100%',
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 700,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  loginBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginBlockField: {
    marginBottom: 18,
  },
  loginBlockText: {
    display: 'block',
    marginBottom: 10,
  },
  loginBlockTwitterIcon: {
    fontSize: 45,
  },
  loginBlockWrapper: {
    maxWidth: 380,
    width: '100%',
  },
  loginBlockTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 45,
    marginTop: 20,
  },
}));

const SignIn = () => {
  const classes = useStylesSignIn();
  const [visibleSignIn, setVisibleSignIn] = React.useState(false);

  const handleClickOpen = () => {
    setVisibleSignIn(true);
  };

  const handleClickClose = () => {
    setVisibleSignIn(false);
  };
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <Twitter className={classes.blueSideBigIcon} color="primary" />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <Search className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutline className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageOutlined className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginBlock}>
        <div className={classes.loginBlockWrapper}>
          <Twitter className={classes.loginBlockTwitterIcon} color="primary" />
          <Typography className={classes.loginBlockTitle} gutterBottom variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b className={classes.loginBlockText}>Присоединяйтесь к Твиттеру прямо сейчас</b>
          </Typography>
          <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpen}>
            Войти
          </Button>
          <ModalBlock visible={visibleSignIn} onClose={handleClickClose} classes={classes} title="Войти в аккаунт">
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginBlockField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginBlockField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleClickClose} variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
