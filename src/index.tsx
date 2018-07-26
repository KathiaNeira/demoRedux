import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './store'
import { App } from './App';

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, node)