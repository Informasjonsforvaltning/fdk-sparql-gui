import React, { memo, FC, useEffect, useRef } from 'react';
import { compose } from 'redux';

import Yasgui from '@triply/yasgui';
import '@triply/yasgui/build/yasgui.min.css';

import Link from '@fellesdatakatalog/link';

import env from '../../../../../../env';

import Translation from '../../../../../../components/translation';

import SC from './styled';

const { SPARQL_API_HOST } = env;

interface Props {}

const SparqlPage: FC<Props> = () => {
  const yasguiRef = useRef<HTMLDivElement>(null);

  const initSparqlGui = (root: HTMLDivElement) =>
    new Yasgui(root, {
      requestConfig: { endpoint: SPARQL_API_HOST },
      copyEndpointOnNewTab: true,
      endpointCatalogueOptions: {
        getData: () => [
          {
            endpoint: SPARQL_API_HOST
          }
        ]
      }
    });

  useEffect(() => {
    if (yasguiRef.current) {
      initSparqlGui(yasguiRef.current);
    }
  }, []);

  return (
    <SC.SparqlPage>
      <SC.Title>
        <Translation id='title' />
      </SC.Title>
      <article>
        <Translation
          id='intro'
          values={{
            sparqlLanguage: (
              <Link href='https://www.w3.org/TR/rdf-sparql-query/'>
                <Translation id='sparqlLanguage' />
              </Link>
            )
          }}
        />
      </article>
      <SC.Yasgui ref={yasguiRef} />
    </SC.SparqlPage>
  );
};

export default compose<FC>(memo)(SparqlPage);
