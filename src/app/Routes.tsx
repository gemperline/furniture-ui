import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from '../App';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';
import { AppHome } from './components/AppHome/AppHome';
import { Navbar } from './components/Navigation/Navigation';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <AppHomeLoadable />}>
        {/* <Route path="/" component={AppHomeLoadable} /> */}
        {/* <Route path="/shop/tables" /> */}
     </Route>
      {/* <Route path="/callback" element={Callback} /> */}
      {/* <Route path="/health">
        <h3>The App is Healthy</h3>
      </Route> */}
      {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}    
      {/* <Layout element={PageNotFound} /> */}
    </Switch>
  )
};
