import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    root: {
      width: '100%',
      padding: '12px 6px',
      display: 'flex',
      alignItems: 'center',
      color: '#FFF',
      backgroundColor: '#000',
      justifyContent: 'center',
    },
});

export const AdBanner = (props) => {
    const { classes } = useStyles();
    return (
        <Grid className={classes.root}>
            {'This is the AdBanner'}
        </Grid>
    );
}