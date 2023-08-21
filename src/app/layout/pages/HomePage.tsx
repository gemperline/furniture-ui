import { Box, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
// import { LayoutGrid, LayoutGridItem } from '../LayoutGrid';
// import { CustomBackdrop } from 'app/components/Common/Backdrop/CustomBackdrop';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: 'calc(100vh - 105px)',
    padding: '12px',
  },
  mainPanelRoot: {
    width: '100%',
  },
  container: {
    flexWrap: 'nowrap',
  },
  header: {
    width: '100%',
    height: '360'
  }
}));

export const HomePage = ({
  title,
  ...props
}: {
  [key: string]: any;
  title: string;
}) => {
  const { classes } = useStyles();

  return (
    <Paper id="home-page-paper" classes={{ root: classes.root }}>
      <Header />
      {'This is the HomePage content'}
      {/* <CustomBackdrop open={loading} /> */}
    </Paper>
  );
};

export const getHomePageSupportComponentHeight = (): number => {
  const a = document.getElementById('home-page-title')?.offsetHeight;
  let spacing = 0;
  if (a) spacing++;
  spacing = spacing >= 2 ? (spacing - 2) * 12 : 12;
  return (a ?? 0) + (spacing || 12);
};
