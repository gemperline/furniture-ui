import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useState } from 'react';
import { DepartmentTile } from '../DepartmentTile';
import BedroomImage from 'app/assets/images/bedroom.png';
import DecorImage from 'app/assets/images/decorDept.png';
import DiningRoomImage from 'app/assets/images/diningRoom.png';
import LivingRoomImage from 'app/assets/images/livingRoom.png';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '12px',
  },
}));

export const DepartmentsSection = ({
  title,
  ...props
}: {
  [key: string]: any;
  title?: string;
}) => {
  const { classes } = useStyles();

  const departments = [
    {
      name: 'livingRoom',
      description: 'Living Room',
      image: BedroomImage,
      altText: 'Living Room Department',
    },
    {
      name: 'diningRoom',
      description: 'Dining Room',
      image: DiningRoomImage,
      altText: 'Dining Room Department',
    },
    {
      name: 'bedroom',
      description: 'Bedroom',
      image: LivingRoomImage,
      altText: 'Bedroom Department',
    },
    {
      name: 'outdoor',
      description: 'Outdoor',
      image: '',
      altText: 'Outdoor Department',
    },
    {
      name: 'decor',
      description: 'Decor',
      image: DecorImage,
      altText: 'Decor Department',
    },
  ];

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <h1>{'Shop By Department'}</h1>
      </Grid>
      {departments.map(department => (
        <DepartmentTile
          name={department.name}
          description={department.description}
          image={department.image}
          altText={department.name}
        />
      ))}
    </Grid>
  );
};
