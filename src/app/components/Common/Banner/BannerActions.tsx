import { Button, Grid } from '@mui/material';
import { IBannerAction } from '../../../models/Global/Global';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const BannerActions = ({ action }: { action: IBannerAction }) => {
  return (
    <Grid container>
      {action === IBannerAction.refreshPage && (
        <Grid item>
          <RefreshButton />
        </Grid>
      )}
    </Grid>
  );
};

const RefreshButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(0);
  };
  return (
    <Button disableElevation color="primary" variant="contained" onClick={onClick}>
      {t('Refresh')}
    </Button>
  );
};
