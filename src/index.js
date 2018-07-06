import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

let Root = () => <Router />

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
