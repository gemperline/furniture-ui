import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, ClickAwayListener, Divider, Grid, IconButton, Link, Paper, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigationStick } from './store/navigation.selectors';
import { navigationActions } from './store/navigation.redux';

const useStyles = makeStyles<{ open: boolean }>()((theme: Theme, props) => ({
    navMenu: {
        display: 'flex',
        flexDirection: 'column',
        height: !props.open ? '60px' : '200px',
    },
    navBar: {
        width: '100%',
        height: '60px',
        boxShadow: '0px 1px 6px #757575',
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: '#FFF',
        fontSize: '24px',
        borderBottom: 'solid 1px #757575',
    },
    drawerCollapse: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    companyName: {
        justifyContent: 'flex-start',
        display: 'flex',
        whiteSpace: 'nowrap',
        letterSpacing: -1,
    },
    leftMenu: {
        display: 'flex',
    },
    rightMenu: {
        marginLeft: 'auto',
    },
    navIcon: {
        background: 'none',
    },
    divider: {
        background: 'rgba(231,110,73,1)',
        height: '2px',
    }
}));

export const Navbar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const { classes } = useStyles({ open });
    const { t } = useTranslation();
    const { navigationExpanded } = useSelector(selectNavigationStick);

    const toggleMenuOpen = (state?: boolean) => {
        if (state) {
            setOpen(state);
        } else {
            setOpen(prev => !prev);
        }
    };

    const closeMenu = () => {
        if (navigationExpanded) {
        //   setExpandSubMenu({});
          dispatch(navigationActions.expandNavigation(false));
        }
    };

    return (
        <>
            {/* <ClickAwayListener onClickAway={() => toggleMenuOpen(false)}> */}
                <Paper className={classes.navMenu}>
                    <Grid className={classes.navBar}>
                        <Grid className={classes.leftMenu}>
                            <IconButton
                                onClick={() => toggleMenuOpen()}
                            >
                                {open ? <CloseIcon className={classes.navIcon} /> : <MenuIcon className={classes.navIcon} />}
                            </IconButton>
                        </Grid>
                        <Grid className={classes.companyName}>
                            {t('Modern Magic')}
                        </Grid>
                        <Grid className={classes.rightMenu}>
                            <IconButton>
                                <AccountCircleIcon className={classes.navIcon} />
                            </IconButton>
                            <IconButton>
                                <ShoppingCartIcon className={ classes.navIcon } />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {/* {open && (

                    )} */}
                </Paper>
            {/* </ClickAwayListener> */}
        <Divider className={classes.divider} />
        </>
    )
}