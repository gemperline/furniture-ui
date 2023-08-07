import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Grid, Link } from '@mui/material';
// import { useTranslation } from 'react-i18next';

const useStyles = makeStyles()(theme => ({
    navBar: {
        width: '100%',
        display: 'flex',
        backgroundColor: 'grey',
        height: 60,
        borderBottom: 'solid 2px black',
        boxShadow: '0px 2px 10px',
        alignItems: 'center',
    },
    companyName: {
        justifyContent: 'flex-start',
        fontSize: '24px',
    },
    menuItems: {
        marginLeft: 'auto',
    },
    rightMenu: {
        marginLeft: 'auto',
        
    },

}));

export const Navbar = () => {
    const { classes } = useStyles();
    // const { t } = useTranslation();
    return (
        <Grid className={classes.navBar}>
            <Grid className={classes.companyName}>
                {'Glamorous Interiors'}
            </Grid>
            <Grid className={classes.menuItems}>
                <Grid>
                    {'list item 1'}
                </Grid>
            </Grid>
            <Grid className={classes.rightMenu}>
                <Link>
                    {'Sign Up'}
                </Link>
                <Link>
                    {'Cart'}
                </Link>
            </Grid>
        </Grid>
    )
}