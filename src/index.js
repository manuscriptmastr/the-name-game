import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Api from './components/Api';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

let Root = () =>
  <Provider store={store} >
    <Api>
      <Router />
    </Api>
  </Provider>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
