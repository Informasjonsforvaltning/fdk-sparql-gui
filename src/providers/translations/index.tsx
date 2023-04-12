import React, { memo, FC, PropsWithChildren, useState, useEffect } from 'react';
import { compose } from 'redux';
import { withCookies, ReactCookieProps } from 'react-cookie';

import service, { Language } from '../../services/translations';

import Context from './context';

import { Cookie } from './enums';

interface Props extends ReactCookieProps {}

const TranslationsProvider: FC<PropsWithChildren<Props>> = ({
  cookies,
  children
}) => {
  const cookieOptions = { path: '/', maxAge: 30 * 24 * 60 * 60 };

  const getLanguageFromCookies = (): Language => {
    const language = cookies?.get(Cookie.LANGUAGE);

    return [Language.NB, Language.NN, Language.EN].includes(language)
      ? language
      : Language.NB;
  };

  const [isInitialised, setIsInitialised] = useState(false);
  const [language, setLanguage] = useState<Language>(getLanguageFromCookies());

  const onChangeLanguage = (lang: Language) => {
    cookies?.set(Cookie.LANGUAGE, lang, cookieOptions);

    setLanguage(lang);
  };

  const init = async () => {
    await service.init(language, onChangeLanguage);

    setIsInitialised(true);
  };

  useEffect(() => {
    init();
  }, []);

  return isInitialised ? (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ service }}>{children}</Context.Provider>
  ) : (
    <></>
  );
};

export default compose<FC<PropsWithChildren<Props>>>(
  memo,
  withCookies
)(TranslationsProvider);
export { withTranslations } from './hoc';
export { Language } from '../../services/translations';
export type { ServiceProps as Props } from './hoc';
export type { Formatted, FormatObject } from '../../services/translations';
