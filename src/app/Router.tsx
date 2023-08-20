import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from '../App';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
// import { Callback } from 'oidc/Callback';
// import { SignoutCallback } from 'oidc/SignoutCallback';
import { PrivateRoute } from './PrivateRoute';
// import { SilentRenew } from 'oidc/SilentRenew';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { HomePage } from './layout/pages/HomePage';
// import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';

export const Router: React.FC = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage title={'Home Page Title'} />} /> */}
    <Route path="/" element={<App />} />

    {/* <Route path="/callback" element={Callback} /> */}
    {/* <Route path="/health">
      <h3>The App is Healthy</h3>
    </Route> */}
    {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}    
    {/* <Layout element={PageNotFound} /> */}
  </Routes>
);
