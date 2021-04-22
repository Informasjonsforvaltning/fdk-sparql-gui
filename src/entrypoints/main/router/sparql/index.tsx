import React, { memo, FC, Suspense, lazy } from 'react';
import { compose } from 'redux';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';

const pages = {
  sparql: lazy(() => import('./pages/sparql-page'))
};

const SparqlRouter: FC<RouteComponentProps> = ({ match: { url } }) => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={url} component={pages.sparql} />
      <Redirect to={url} />
    </Switch>
  </Suspense>
);

export default compose<FC>(memo)(SparqlRouter);
