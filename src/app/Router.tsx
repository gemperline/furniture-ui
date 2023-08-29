import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { HomePage } from './layout/pages/HomePage';
import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';
import { AppHome } from './components/AppHome/AppHome';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/" element={<AppHome />} />
    </Route>
    {/* <Route path="/shop/tables" element={<PrivateRoute />}>
      <Route path="/shop/tables" element={< />} />
    </Route> */}
    {/* <Route path="/callback" element={Callback} /> */}
    {/* <Route path="/health">
      <h3>The App is Healthy</h3>
    </Route> */}
    {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}    
    {/* <Layout element={PageNotFound} /> */}
  </Routes>
);
