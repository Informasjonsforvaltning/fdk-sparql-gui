import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import ThemeProvider from '@fellesdatakatalog/theme';

import TranslationsProvider from '../../../providers/translations';

import store from '../redux/store';

import GlobalStyles from '../styles';

import MainPage from '../pages';
import SparqlPage from '../pages/sparql-page';

interface Props {
  language?: any;
}

const App: FC<Props> = ({ language }) => (
  <ThemeProvider>
    <GlobalStyles />
    <CookiesProvider>
      <TranslationsProvider>
        <ReduxProvider store={store}>
          {language ? <SparqlPage language={language} /> : <MainPage />}
        </ReduxProvider>
      </TranslationsProvider>
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
