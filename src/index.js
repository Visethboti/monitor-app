import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import renderAllCharts from './chartFunction.js';

ReactDOM.render(<App />, document.getElementById('root'));

renderAllCharts();
