import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from '../App';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { HomePage } from './layout/pages/HomePage';
import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';
import { AppHome } from './components/AppHome/AppHome';
import { Navbar } from './components/Navigation/Navigation';

export const Routes = () => {
  return (
    <div></div>
    // <Switch>
      // <Route path="/" component={<PrivateRoute />}>
      //   <Route path="/" component={<AppHome />} />
      // </Route>
      // {/* <Route path="/shop/tables" element={<PrivateRoute />}>
      //   <Route path="/shop/tables" element={< />} />
      // </Route> */}
      // {/* <Route path="/callback" element={Callback} /> */}
      // {/* <Route path="/health">
      //   <h3>The App is Healthy</h3>
      // </Route> */}
      // {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}    
      // {/* <Layout element={PageNotFound} /> */}
    // </Switch>

  )
};
