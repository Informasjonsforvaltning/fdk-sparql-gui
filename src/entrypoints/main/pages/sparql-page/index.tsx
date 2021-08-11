import React, { memo, FC, useEffect, useRef } from 'react';
import { compose } from 'redux';

import Yasgui from '@triply/yasgui';
import '@triply/yasgui/build/yasgui.min.css';

import Link from '@fellesdatakatalog/link';

import env from '../../../../env';

import Translation from '../../../../components/translation';

import SC from './styled';
import {
  withTranslations,
  Props as TranslationsProps
} from '../../../../providers/translations';

const { SPARQL_API_HOST } = env;

interface Props {
  language?: any;
  endpoint?: string;
}

const SparqlPage: FC<Props & TranslationsProps> = ({
  language,
  endpoint,
  translationsService
}) => {
  const yasguiRef = useRef<HTMLDivElement>(null);

  const initSparqlGui = (root: HTMLDivElement) =>
    new Yasgui(root, {
      requestConfig: { endpoint: endpoint ?? SPARQL_API_HOST },
      copyEndpointOnNewTab: true,
      endpointCatalogueOptions: {
        getData: () => [
          {
            endpoint: endpoint ?? SPARQL_API_HOST
          }
        ]
      }
    });

  useEffect(() => {
    if (yasguiRef.current) {
      initSparqlGui(yasguiRef.current);
    }
  }, []);

  useEffect(() => {
    if (language) {
      translationsService.changeLanguage(language);
    }
  }, [language]);

  return (
    <SC.SparqlPage>
      <SC.Title>
        <Translation id='title' />
      </SC.Title>
      <article>
        <Translation
          id='intro'
          values={{
            sparql: (
              <Link href='https://www.w3.org/TR/rdf-sparql-query/'>
                <Translation id='sparql' />
              </Link>
            )
          }}
        />
      </article>
      <SC.Yasgui ref={yasguiRef} />
    </SC.SparqlPage>
  );
};

export default compose<FC<Props>>(memo, withTranslations)(SparqlPage);
