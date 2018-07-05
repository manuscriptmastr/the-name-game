import React  from 'react';
import './styles.css';
import { HashRouter as RouteList, Route, Switch } from 'react-router-dom';
import IntroScreen from '../IntroScreen/index';
import PlayScreen from '../PlayScreen/index';
import SettingsScreen from '../SettingsScreen/index';

let Router = () =>
  <RouteList>
    <Switch>
      <Route path="/" component={IntroScreen} />
      <Route path="/play" component={PlayScreen} />
      <Route path="/settings" component={SettingsScreen} />
    </Switch>
  </RouteList>

export default Router;
