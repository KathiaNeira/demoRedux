import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(
    <App />
, node)