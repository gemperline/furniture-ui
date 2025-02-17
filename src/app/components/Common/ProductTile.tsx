import { Box, Grid, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles()(() => ({
  main: {
    display: 'flex',
    padding: '6px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTile: {
    display: 'flex',
    padding: '6px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    aspectRatio: '1 / 1',
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
      opacity: 0.5,
      textDecoration: 'none',
    },
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'grey',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '8px 12px',
    textAlign: 'center',
    border: '2px solid white',
    letterSpacing: '2px',
  },
}));

export const ProductTile = ({
  product
}: {
  [key: string]: any;
  product: any
}) => {
  const { classes } = useStyles();
  const history = useHistory();
  const { sku, description, image } = product;
  
  return (
    <Grid item className={classes.main}>
      {/* <Box className={classes.productTile}> */}
        <Button 
            className={classes.button} 
            onClick={() => history.push(sku)} 
            style={{ backgroundImage: !!image ? `url(${image})` : 'none' }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
        >
        </Button>
        <Box className={classes.textContainer}>
            <Typography variant="body1" color="black">
                {description}
            </Typography>
        </Box>
      {/* </Box> */}
     </Grid>
  );
};
