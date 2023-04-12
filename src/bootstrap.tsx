import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './entrypoints/main/app';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);
root.render(<App />);
