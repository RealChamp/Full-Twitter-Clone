import React from "react"
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import {
    BookmarkBorder,
    EmailOutlined,
    ListAlt,
    NotificationsOutlined,
    PersonOutline,
    Search,
    Twitter,
    Create
} from "@material-ui/icons";
import {useHomeStyles} from "../Pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideNavList}>
            <div>
                <li className={classes.sideNavListItem}>
                    <IconButton className={classes.logo}
                                color="primary">
                        <Twitter className={classes.logoIcon}/>
                    </IconButton>
                </li>
            </div>
            <li className={classes.sideNavListItem}>
                <div>
                    <Search
                        className={classes.sideNavListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideNavListItemLabel}
                                    variant="h6">
                            Поиск
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <NotificationsOutlined
                        className={classes.sideNavListItemIcon}/>
                    <Hidden smDown>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Уведомления
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <EmailOutlined
                        className={classes.sideNavListItemIcon}/>
                    <Hidden smDown>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Сообщения
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <BookmarkBorder
                        className={classes.sideNavListItemIcon}/>
                        <Hidden smDown>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Закладки
                    </Typography>
                        </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <ListAlt
                        className={classes.sideNavListItemIcon}/>
                        <Hidden smDown>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Список
                    </Typography>
                        </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <PersonOutline
                        className={classes.sideNavListItemIcon}/>
                        <Hidden smDown>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Профиль
                    </Typography>
                        </Hidden>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <Button className={classes.sideNavTweetButton} variant='contained' color='primary'
                        fullWidth>
                   <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp><Create/></Hidden>
                </Button>
            </li>
        </ul>
    )
}