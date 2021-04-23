import React, { memo, FC, useEffect, useRef } from 'react';
import { compose } from 'redux';

import Yasgui from '@triply/yasgui';
import '@triply/yasgui/build/yasgui.min.css';

import env from '../../../../../../env';

import Translation from '../../../../../../components/translation';

import SC from './styled';

const { SPARQL_API_HOST } = env;

interface Props {}

const SparqlPage: FC<Props> = () => {
  const yasguiRef = useRef(null);

  useEffect(() => {
    if (yasguiRef.current != null) {
      const yasgui = new Yasgui(yasguiRef.current as any, {
        requestConfig: { endpoint: SPARQL_API_HOST },
        copyEndpointOnNewTab: false,
        endpointCatalogueOptions: {
          getData: () => [
            {
              endpoint: SPARQL_API_HOST
            }
          ]
        }
      });

      yasgui.rootEl;
    }

    return () => {};
  }, []);

  return (
    <SC.SparqlPage>
      <SC.Title>
        <Translation id='title' />
      </SC.Title>
      <SC.Yasgui ref={yasguiRef} />
    </SC.SparqlPage>
  );
};

export default compose<FC>(memo)(SparqlPage);
