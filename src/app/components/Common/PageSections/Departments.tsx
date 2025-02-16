import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { DepartmentTile } from '../DepartmentTile';
import BedroomImage from 'app/assets/images/bedroom.png';
import DecorImage from 'app/assets/images/decorDept.png';
import DiningRoomImage from 'app/assets/images/diningRoom.png';
import LivingRoomImage from 'app/assets/images/livingRoom.png';
import OutdoorImage from 'app/assets/images/outdoor.png';
import { useTranslation } from 'react-i18next';
import path from 'path';

const useStyles = makeStyles()((theme) => ({
  sectionHeader: {
    textDecoration: 'underline',
    textWrap: 'wrap',
    maxWidth: '50%',
    padding: '12px',
  },
  tilesWrapper: {
    padding: '6px',
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
  const { t } = useTranslation();

  const departments = [
    {
      name: 'livingRoom',
      description: 'Living Room',
      image: BedroomImage,
      altText: 'Living Room Department',
      path: '/shop/living-room',
    },
    {
      name: 'kitchen+dining',
      description: 'Dining',
      image: DiningRoomImage,
      altText: 'Dining Room Department',
      path: '/shop/kitchen-dining',
    },
    {
      name: 'bedroom',
      description: 'Bedroom',
      image: LivingRoomImage,
      altText: 'Bedroom Department',
      path: '/shop/bedroom',
    },
    {
      name: 'outdoor',
      description: 'Outdoor',
      image: OutdoorImage,
      altText: 'Outdoor Department',
      path: '/shop/outdoor',
    },
    {
      name: 'decor',
      description: 'Decor',
      image: DecorImage,
      altText: 'Decor Department',
      path: '/shop/decor',
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={classes.sectionHeader}>{`${t('Shop By Department')}`}</h1>
      </Grid>
      <Grid container className={classes.tilesWrapper}>
        {departments.map((department) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={department.name}>
            <DepartmentTile
              name={department.name}
              description={department.description}
              image={department.image}
              altText={department.name}
              path={department.path}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
