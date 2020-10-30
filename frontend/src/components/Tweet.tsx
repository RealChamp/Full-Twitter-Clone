import React from 'react'
import classNames from "classnames";
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import {ChatBubbleOutline, FavoriteBorder, RepeatOutlined, ShareOutlined} from "@material-ui/icons";
import {useHomeStyles} from '../Pages/Home';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
    text: string
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)}
               variant='outlined'>
            <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${user.fullname}`}
                    src={user.avatarUrl}/>
            <div>
                <Typography><b>{user.fullname}</b>
                    <span
                        className={classes.tweetUserName}> @{user.username}
                        </span>
                    <span
                        className={classes.tweetUserName}> ·
                        </span>&nbsp;
                    <span
                        className={classes.tweetUserName}>1 ч. назад
                        </span>
                </Typography>
                <Typography variant='body1'>
                    {text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton color='primary' className={classes.tweetFooterIcon}>
                            <ChatBubbleOutline
                                style={{fontSize: 21}}/>
                        </IconButton>
                        <span>1</span>
                    </div>
                    <div>
                        <IconButton color='primary' className={classes.tweetFooterIcon}>
                            <RepeatOutlined
                                style={{fontSize: 21}}/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color='primary' className={classes.tweetFooterIcon}>
                            <FavoriteBorder
                                style={{fontSize: 21}}/>
                        </IconButton>

                    </div>
                    <div>
                        <IconButton color='primary' className={classes.tweetFooterIcon}>
                            <ShareOutlined
                                style={{fontSize: 21}}/>
                        </IconButton>

                    </div>
                </div>
            </div>
        </Paper>
    )
}