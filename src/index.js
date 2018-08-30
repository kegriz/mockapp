import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './styles/css/index.css';
import App from './components/App/index';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
