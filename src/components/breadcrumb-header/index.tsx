import React, { memo, FC } from 'react';
import { compose } from 'redux';
import { Breadcrumb } from '@fellesdatakatalog/breadcrumbs';
import Link from '@fellesdatakatalog/link';

import Translation from '../translation';

import SC from './styled';

const BreadcrumbHeader: FC = () => (
  <SC.BreadcrumbHeader>
    <SC.Breadcrumbs
      separator={<SC.BreadcrumbSeparator>{'>'}</SC.BreadcrumbSeparator>}
    >
      <Breadcrumb>
        <Link href='/'>
          <Translation id='breadcrumb.search' />
        </Link>
      </Breadcrumb>
      <Breadcrumb active>
        <Translation id='breadcrumb.sparql' />
      </Breadcrumb>
    </SC.Breadcrumbs>
  </SC.BreadcrumbHeader>
);

export default compose<FC>(memo)(BreadcrumbHeader);
