import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    root: {
      width: '100%',
      padding: '12px 6px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    subRoot: {
      width: '100%',
    },
    adbanner: {
        justifyContent: 'center',
        display: 'flex',
    },
    rootWarning: {
      backgroundColor: '#FEF6EE',
      border: '1px solid #FFA22E',
      justifyContent:'left',
      '& #custom-banner-text': {
        color: '#663B01',
      },
    },
    rootError: {
      backgroundColor: '#ffd9cc',
      '& #custom-banner-text': {
        color: '#611a16',
      },
    },
    icon: {
      marginLeft: '6px',
      marginRight: '12px',
    },
    text: {
      fontSize: 14,
      alignSelf: 'center',
    },
    action: {
      marginLeft: '12px',
    },
});

export const Header = (props) => {
    const { classes } = useStyles();
    return (
        <Grid className={classes.root}>
            <div style={{ height: props?.height }}>
                {'This is the header'}
            </div>
        </Grid>
    );
}