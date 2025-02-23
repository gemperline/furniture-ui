import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useState } from 'react';
import { Header } from '../../../components/Header/Header';
import { CatalogueSection } from 'app/components/Common/PageSections/Catalogue';
import { useLocation } from 'react-router-dom';
import { MOCK_DEPARTMENTS } from 'app/mockData/MOCK_DEPARTMENTS';

const useStyles = makeStyles()(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  paperContainer: {
    flex: 1,
    overflowY: 'auto',
  },
}));

export const DepartmentPage = ({ title }: { title: string }) => {
  const { classes } = useStyles();
  const location = useLocation();
  const department = location.pathname.split("/").pop() || "";
  const departmentTitle = MOCK_DEPARTMENTS.find(dept => dept.path === `/${department}`)?.description || '';

  return (
    // <Paper id={`${title}-page-paper`} className={classes.main}><
    <>
      <Header />
      <div className={classes.paperContainer}>
        <CatalogueSection headerTitle={departmentTitle} />
      </div>
      </>
    // </Paper>
  );
};