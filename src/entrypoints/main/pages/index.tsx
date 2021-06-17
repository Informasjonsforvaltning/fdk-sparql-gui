import React, { memo, FC } from 'react';
import { compose } from 'redux';

import type { History } from 'history';

import Footer from '@fellesdatakatalog/external-footer';
import Header from '../../../components/header';
import BreadcrumbHeader from '../../../components/breadcrumb-header';
import BetaTag from '../../../components/beta-tag';
import Root from '../../../components/root';
import SparqlPage from './sparql-page';

interface Props {
  history?: History;
}

const Router: FC<Props> = () => (
  <>
    <Header />
    <BreadcrumbHeader />
    <BetaTag />
    <Root>
      <SparqlPage />
    </Root>
    <Footer />
  </>
);

export default compose<FC>(memo)(Router);
