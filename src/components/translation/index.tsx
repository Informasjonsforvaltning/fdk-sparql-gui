import React, { memo, FC } from 'react';
import { compose } from 'redux';

import {
  withTranslations,
  Props as TranslationsProps,
  FormatObject
} from '../../providers/translations';

interface ExternalProps {
  id: string;
  values?: FormatObject;
}

interface Props extends ExternalProps, TranslationsProps {}

const Translation: FC<Props> = ({ translationsService, id, values }) => (
  <>{translationsService.translate(id, values)}</>
);

export default compose<FC<ExternalProps>>(memo, withTranslations)(Translation);
