import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './layout/Layout';
// import { NetworkError } from './components/Common/NetworkError/NetworkError';

export const PrivateRoute = ({
  Component,
//   roles = [userRoles.all],
  removeLayout = false,
  ...rest
}: {
  [x: string]: any;
  Component: any;
//   roles?: (keyof IRoles)[] | undefined;
  removeLayout?: boolean;
}) => {
  const dispatch = useDispatch();
  return (
    <>
        <Layout {...rest} Component={Component} />
        <div className={'center-fullscreen'}>
            <CircularProgress />
        </div>
    </>
  );
};
