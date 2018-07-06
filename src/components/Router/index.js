import React  from 'react';
import { HashRouter as RouteList, Route, Switch } from 'react-router-dom';
import IntroScreen from '../IntroScreen';
import PlayScreen from '../PlayScreen';
import SettingsScreen from '../SettingsScreen';

let Router = () =>
  <RouteList>
    <Switch>
      <Route path="/settings" component={SettingsScreen} />
      <Route path="/play" component={PlayScreen} />
      <Route path="/" component={IntroScreen} />
    </Switch>
  </RouteList>

export default Router;
