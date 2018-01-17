import React from 'react';

import Home from './view/home/index.jsx';
import Signup from './view/signup/index.jsx';

import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />;

class Routers extends React.Component {
  routers = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/signup',
      component: Signup,
    },
  ];
  render() {
    return <div>{this.routers.map((router, i) => <RouteWithSubRoutes key={i} {...router} />)}</div>;
  }
}

export default Routers;
