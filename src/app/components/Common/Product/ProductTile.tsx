import { Grid, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReviewStars } from './ReviewStars';
import { ColumnAmount, IProduct, ProductTileVariant } from 'app/models/Product/product';

const useStyles = makeStyles<{ variant }>()((theme, { variant }) => ({
  tile: {
    display: 'block',
  },
  button: {
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '&:hover': {
      opacity: 0.5,
      textDecoration: 'none',
    },
  },
  details: {
    flexDirection: 'column',
    alignItems: variant === ProductTileVariant.REGULAR ? 'flex-start' : 'center',
  },
  detailsUpper: {
    display: 'flex',
    flexDirection: variant === ProductTileVariant.REGULAR ? 'row' : 'column',
    alignItems: 'inherit',
    width: '100%',
  },
  textContainer: {
    letterSpacing: '1px',
    flex: variant === ProductTileVariant.REGULAR ? 2 : 1,
    textAlign: variant === ProductTileVariant.CENTERED ? 'center' : 'left',
  },
  productName: {
    fontSize: '16px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2, // Limits text to 2 lines
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  reviewsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '12px',
  },
  varieties: {
    fontSize: '12px',
  },
}));

export const ProductTile = ({
  product,
  variant,
}: {
  [key: string]: any;
  product: IProduct;
  variant: ProductTileVariant;
}) => {
  const { classes } = useStyles({ variant });
  const history = useHistory();
  const { sku, name, description, image, rating, varieties } = product;

  return (
    <Grid item className={classes.tile}>
      <Button
        className={classes.button}
        onClick={() => history.push(`/furniture/${sku}`)}
        style={{ backgroundImage: !!image ? `url(${image})` : 'none' }}
        disableRipple 
        disableFocusRipple
        disableTouchRipple
      />
      <Grid container className={classes.details}>
        <Grid item className={classes.detailsUpper}>
          <Grid item className={classes.textContainer}>
            <Typography color="black" className={classes.productName}>
              {name}
            </Typography>
          </Grid>
          <Grid item className={classes.reviewsContainer}>
            <ReviewStars rating={rating} />
          </Grid>
        </Grid>
        {varieties?.length && varieties[0].options?.length > 1 && (
          <Grid item>
            <Typography color="black" className={classes.varieties}>
              {`${varieties[0].options?.length} ${varieties[0].type}`}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
