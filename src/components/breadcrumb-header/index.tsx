import React, { memo, FC } from 'react';
import { compose } from 'redux';
import { Breadcrumb } from '@fellesdatakatalog/breadcrumbs';
import Link from '@fellesdatakatalog/link';

import SC from './styled';

const BreadcrumbHeader: FC = () => (
  <SC.BreadcrumbHeader>
    <SC.Breadcrumbs
      separator={<SC.BreadcrumbSeparator>{'>'}</SC.BreadcrumbSeparator>}
    >
      <Breadcrumb>
        <Link href='/' target='_self'>
          Søk i Felles datakatalog
        </Link>
      </Breadcrumb>
      <Breadcrumb active>SPARQL</Breadcrumb>
    </SC.Breadcrumbs>
  </SC.BreadcrumbHeader>
);

export default compose<FC>(memo)(BreadcrumbHeader);
