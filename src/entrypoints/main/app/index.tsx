import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import ThemeProvider from '@fellesdatakatalog/theme';

import TranslationsProvider from '../../../providers/translations';

import store from '../redux/store';

import GlobalStyles from '../styles';

import Router from '../router';

const App: FC = () => (
  <ThemeProvider>
    <GlobalStyles />
    <CookiesProvider>
      <TranslationsProvider>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
      </TranslationsProvider>
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
