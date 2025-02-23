import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReviewStars } from '../../../components/Common/Product/ReviewStars';
import { ColumnAmount, IProduct, ProductTileVariant } from 'app/models/Product/product';
import { theme } from 'styles/global-styles';
import { Carousel } from '../../../components/Common/Carousel';
import { MOCK_PRODUCT_IMAGES } from 'app/mockData/MOCK_PRODUCT_IMAGES';
import { MOCK_PRODUCTS } from 'app/mockData/MOCK_PRODUCTS';

const useStyles = makeStyles<{ isSmallScreen }>()((theme, { isSmallScreen }) => ({
  main: {
    padding: !isSmallScreen && '24px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
  },
}));

export const ProductPage = ({ id }: { id: string }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { classes } = useStyles({ isSmallScreen });
  const history = useHistory();
  const product = MOCK_PRODUCTS[0];
  const { rating, name, description, price, salePrice } = product;
  
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} md={6}>
        <Carousel images={MOCK_PRODUCT_IMAGES} />
        <Grid item xs={12} md={6} className={classes.details}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6">{description}</Typography>
          <Typography variant="h6" sx={{ textDecoration: 'line-through' }}>{price}</Typography>
          <Typography variant="h6">{salePrice}</Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <ReviewStars rating={rating} />
        </Grid>
      </Grid>
    </Grid>
  );
};
