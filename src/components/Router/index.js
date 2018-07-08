import React  from 'react';
import { HashRouter as RouteList, Route, Switch } from 'react-router-dom';
import IntroScreen from '../IntroScreen';
import PlayScreen from '../PlayScreen';

let Router = () =>
  <RouteList>
    <Switch>
      <Route path="/" component={PlayScreen} />
      {/* <Route path="/" component={IntroScreen} /> */}
    </Switch>
  </RouteList>

export default Router;
