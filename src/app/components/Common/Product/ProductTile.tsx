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
  detailsFirst: {
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
  detailsSecond: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: variant === ProductTileVariant.REGULAR ? 'flex-end' : 'center',
    paddingLeft: variant === ProductTileVariant.REGULAR && '12px',
  },
  varieties: {
    fontSize: '12px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#616061',
    letterSpacing: '1px',
  },
}));

export const ProductTile = ({
  product,
  variant,
}: {
  product: IProduct;
  variant: ProductTileVariant;
}) => {
  const { classes } = useStyles({ variant });
  const history = useHistory();
  const { sku, name, description, image, rating, varieties } = product;

  return (
    <Grid id={`product-${product.id}`} item className={classes.tile}>
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
          <Grid item className={classes.detailsFirst}>
            <Typography className={classes.productName}>
              {name}
            </Typography>
            {varieties?.length && varieties[0].options?.length > 1 ? (
              <Grid item>
                <Typography className={classes.varieties}>
                  {`${varieties[0].options?.length} ${varieties[0].type}`}
                </Typography>
              </Grid>
            ) : (
              // the following item is whitespace. Could make the product name take up the third line if it runs long and there's no additional colors/varieties.
              // Othewise, use this whitespace.
              <Grid item>
                <Typography style={{ visibility: 'hidden' }} className={classes.varieties}>
                  {'-'} 
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid item className={classes.detailsSecond}>
            <Grid item>
              <Typography className={classes.price}>{`$${product.price}`}</Typography> 
            </Grid>
            <ReviewStars rating={rating} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
