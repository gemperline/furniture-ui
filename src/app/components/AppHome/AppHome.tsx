import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationActions } from '../Navigation/store/navigation.redux';
import { HomePage } from 'src/app/layout/pages/HomePage';

const useStyles = makeStyles()({
  componentContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
    display: 'fit-content',
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
    <Grid className={classes.componentContainer} style={{ paddingTop: '100px' }}>
        <HomePage title={'External user view'} />
    </Grid>
  );
};
