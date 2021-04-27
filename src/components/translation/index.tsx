import React, { memo, FC } from 'react';
import { compose } from 'redux';

import {
  withTranslations,
  Props as TranslationsProps,
  Formatted,
  FormatObject
} from '../../providers/translations';

interface ExternalProps {
  id: string;
  values?: FormatObject<Formatted>;
}

interface Props extends ExternalProps, TranslationsProps {}

const Translation: FC<Props> = ({ translationsService, id, values }) => (
  <>{translationsService.translate(id, values)}</>
);

export default compose<FC<ExternalProps>>(memo, withTranslations)(Translation);
