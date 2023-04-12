import React, { FC } from 'react';
import { CookiesProvider } from 'react-cookie';
import ThemeProvider from '@fellesdatakatalog/theme';

import TranslationsProvider from '../../../providers/translations';

import GlobalStyles from '../styles';

import MainPage from '../pages';
import SparqlPage from '../pages/sparql-page';

interface Props {
  language?: any;
  endpoint?: string;
}

const App: FC<Props> = ({ language, endpoint }) => (
  <ThemeProvider>
    <GlobalStyles />
    <CookiesProvider>
      <TranslationsProvider>
        {language ? (
          <SparqlPage language={language} endpoint={endpoint} />
        ) : (
          <MainPage />
        )}
      </TranslationsProvider>
    </CookiesProvider>
  </ThemeProvider>
);

export default App;
