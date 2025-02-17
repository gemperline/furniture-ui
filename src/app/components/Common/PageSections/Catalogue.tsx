import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { ProductTile } from '../ProductTile';
import { useTranslation } from 'react-i18next';
import { MOCK_PRODUCTS } from 'app/mockData/MOCK_PRODUCTS';

const useStyles = makeStyles()((theme) => ({
  sectionHeader: {
    textDecoration: 'underline',
    textWrap: 'nowrap',
    padding: '12px 12px 0px',
    marginBottom: '0px',
  },
  tilesWrapper: {
    padding: '6px',
  },
}));

export const CatalogueSection = ({
  headerTitle,
}: {
  [key: string]: any;
  headerTitle?: string;
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={classes.sectionHeader}>{headerTitle}</h1>
      </Grid>
      <Grid container className={classes.tilesWrapper}>
        {MOCK_PRODUCTS.map((product) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={product.name}>
            <ProductTile
              key={product.name}
              product={product}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
