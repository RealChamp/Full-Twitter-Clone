import React from "react"
import {IconButton, Typography} from "@material-ui/core";
import {
    BookmarkBorder,
    EmailOutlined,
    ListAlt,
    NotificationsOutlined,
    PersonOutline,
    Search,
    Twitter
} from "@material-ui/icons";
import {useHomeStyles} from "../Pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideNavList}>
            <li className={classes.sideNavListItem}>
                <IconButton className={classes.logo}
                            color="primary">
                    <Twitter className={classes.logoIcon}/>
                </IconButton>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <Search
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <NotificationsOutlined
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <EmailOutlined
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <BookmarkBorder
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <ListAlt
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideNavListItem}>
                <div>
                    <PersonOutline
                        className={classes.sideNavListItemIcon}/>
                    <Typography className={classes.sideNavListItemLabel}
                                variant="h6">
                        Профиль
                    </Typography>
                </div>
            </li>
        </ul>
    )
}