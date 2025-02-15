import { Box, Grid, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    padding: '12px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200, // Adjust size as needed
    height: 200, // Keeping it square
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 2,
    overflow: 'hidden',
    padding: 0,
    '&:hover': {
      opacity: 0.9,
    },
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '8px',
    borderRadius: '4px',
    textAlign: 'center',
  },
}));

export const DepartmentTile = ({
  name,
  description,
  image,
  altText,
}: {
  [key: string]: any;
  name: string;
  description: string;
  image: string;
  altText: string;
}) => {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.root}>
      <Button className={classes.button} onClick={() => {}} style={{ backgroundImage: `url(${image})` }}>
        <Box className={classes.textContainer}>
          <Typography variant="body1" color="black">
            {description}
          </Typography>
        </Box>
      </Button>
    </Grid>
  );
};
