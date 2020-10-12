import React from 'react';
import {makeStyles, Button} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {Twitter} from '@material-ui/icons/'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        backgroundColor: '#1da1f2',
        flex: '0 0 50%',
    },
    loginBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
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
        marginBottom: 55,
        marginTop: 20,
    }
}))

const SignIn = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>Читайте о том, что вам
                            интересно</Typography></li>
                    <li>
                        <Typography>Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li><Typography>Присоединяйтесь к общению</Typography></li>
                </ul>
            </section>
            <section className={classes.loginBlock}>
                <div className={classes.loginBlockWrapper}>
                    <Twitter className={classes.loginBlockTwitterIcon}
                             color='primary'/>
                    <Typography className={classes.loginBlockTitle} gutterBottom variant='h4'>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                       <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
                    </Typography>
                    <Button style={{marginBottom: 20}} variant='contained' color='primary'
                            fullWidth>Зарегистрироваться</Button>
                    <Button variant='outlined' color='primary'
                            fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    )
};

export default SignIn;
