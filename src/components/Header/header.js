import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './header.css'

const StyledBadge = withStyles(theme => ({
    badge: {
        width: 4,
        right: 1,
        top: 3,
        background: '#FFC06A',
        color: '#FFC06A',
        fontSize: '10px',
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}))(Badge);

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


export default function DenseAppBar() {

    const classes = useStyles();

    return (
        <>
            <div className="navbar">
                <div className="links">
                    <a href="/">Pra Você</a>
                    <a href="#!">Descobrir</a>
                    <a href="/interact">Ao Vivo</a>
                    <a href="/perfil">Perfil</a>
                    <a href="#!">Categorias</a>
                </div>
                <div className="notifications">
                    <StyledBadge badgeContent={1} color="error">
                        <NotificationsIcon style={{ color: grey[50] }}/>
                    </StyledBadge>
                    <Avatar alt="Remy Sharp"
                            src="https://www.menshair.style/wp-content/uploads/2019/05/mens-hairstyles-for-round-faces-39.jpg"
                            className={classes.large}
                    />
                </div>
            </div>
        </>
    );
}