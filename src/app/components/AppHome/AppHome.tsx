import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationActions } from '../Navigation/store/navigation.redux';
import { HomePage } from 'app/layout/pages/HomePage';
import { Header } from '../Header/Header';

const useStyles = makeStyles()({
  pageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
});

// Order of variables are important
export enum HomeView {
  EXTERNAL_USER_LANDING = 'externalUserLanding',
}

export const AppHome: React.FC = () => {
  const { classes } = useStyles();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid className={classes.pageContainer}>
        <HomePage title={'External user view'} />
    </Grid>
  );
};
