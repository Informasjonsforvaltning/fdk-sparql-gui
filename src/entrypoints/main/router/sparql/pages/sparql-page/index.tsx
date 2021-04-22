import React, { memo, FC, useEffect, useRef } from 'react';
import { compose } from 'redux';

import Yasgui from '@triply/yasgui';
import '@triply/yasgui/build/yasgui.min.css';

import SC from './styled';

interface Props {}

const SparqlPage: FC<Props> = () => {
  const yasguiRef = useRef(null);

  useEffect(() => {
    if (yasguiRef.current != null) {
      // eslint-disable-next-line no-new
      new Yasgui(yasguiRef.current as any, {
        requestConfig: { endpoint: 'http://example.com/sparql' },
        copyEndpointOnNewTab: false
      });
    }

    return () => {};
  }, []);

  return (
    <SC.SparqlPage>
      <SC.Title>SPARQL Endepunkt</SC.Title>
      <div ref={yasguiRef} />
    </SC.SparqlPage>
  );
};

export default compose<FC>(memo)(SparqlPage);
