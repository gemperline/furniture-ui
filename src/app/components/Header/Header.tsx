import React from 'react';
import { makeStyles } from 'tss-react/mui';
import LivingRoom from '../../assets/images/LivingRoom1.jpg';

const useStyles = makeStyles()((theme) => ({
    header: {
        display: 'flex',
        width: '100%',
        height: '270px',
    }
}));

export const Header = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.header}>
            <img src={LivingRoom} alt={'living room'} />
            {'This is the header'}
        </div>
    );
}