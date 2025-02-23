import { Box, Breakpoint, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect, useState } from 'react';
import { ProductTile } from '../Product/ProductTile';
import { useTranslation } from 'react-i18next';
import { MOCK_PRODUCTS } from 'app/mockData/MOCK_PRODUCTS';
import GridViewIcon from '@mui/icons-material/GridView';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { theme } from 'styles/global-styles';
import { ColumnAmount, ProductTileVariant } from 'app/models/Product/product';

const useStyles = makeStyles()((theme) => ({
  main: {
    padding: '12px',
  },
  sectionHeader: {
    display: 'flex',
    width: '100%',
    margin: '12px 0px',
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    textDecoration: 'underline',
    textWrap: 'wrap',
    fontSize: '32px',
  },
  tilesWrapper: {
    // padding: '6px',
  },
}));

interface IBreakPointProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export const CatalogueSection = ({
  headerTitle,
}: {
  headerTitle?: string;
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [breakpoints, setBreakpoints] = useState<IBreakPointProps>({ xs: 12, sm: 6, md: 4, lg: 3 });
  const [layoutSelection, setLayoutSelection] = useState<ColumnAmount>(ColumnAmount.LESS);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [tileVariant, setTileVariant] = useState<ProductTileVariant>(ProductTileVariant.REGULAR);

  useEffect(() => {
    if (layoutSelection === ColumnAmount.LESS) {
      setBreakpoints({ xs: 12, sm: 12, md: 6, lg: 4 });
    } else if (layoutSelection === ColumnAmount.MORE) {
      setBreakpoints({ xs: 6, sm: 6, md: 4, lg: 3 });
    } else {
      setBreakpoints({ xs: 12, sm: 12, md: 6, lg: 4 });
    }

    if (isSmallScreen && layoutSelection === ColumnAmount.MORE) {
      setTileVariant(ProductTileVariant.CENTERED);
    } else {
      setTileVariant(ProductTileVariant.REGULAR);
    }
    
  }, [layoutSelection, isSmallScreen]);
  
  return (
    <Grid container className={classes.main}>
      <Grid className={classes.sectionHeader}>
        <Grid className={classes.headerLeft}>
          <Typography className={classes.headerText}>{headerTitle}</Typography>
        </Grid>
        <Grid className={classes.headerRight}>
          <IconButton
            onClick={() => setLayoutSelection(ColumnAmount.LESS)}
            sx={{
              bgcolor: layoutSelection === ColumnAmount.LESS ? 'lightgray' : 'transparent',
              borderRadius: '50%',
              padding: '8px',
              '&:hover': { bgcolor: 'rgba(211, 211, 211, 0.7)' },
            }}
          >
            <CropSquareIcon sx={{ fill: layoutSelection === ColumnAmount.LESS ? 'black' : 'gray' }} />
          </IconButton>
          <IconButton
            onClick={() => setLayoutSelection(ColumnAmount.MORE)}
            sx={{
              marginLeft: '1px',
              bgcolor: layoutSelection === ColumnAmount.MORE ? 'lightgray' : 'transparent',
              borderRadius: '50%',
              padding: '8px',
              '&:hover': { bgcolor: 'rgba(211, 211, 211, 0.7)' },
            }}
          >
            <GridViewIcon sx={{ fill: layoutSelection === ColumnAmount.MORE ? 'black' : 'gray' }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container className={classes.tilesWrapper} spacing={2}>
        {MOCK_PRODUCTS.map((product) => (
          <Grid 
            item 
            key={product.id}
            xs={breakpoints?.xs} 
            sm={breakpoints?.sm} 
            md={breakpoints?.md} 
            lg={breakpoints?.lg}
          >
            <ProductTile
              product={product}
              variant={tileVariant}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
