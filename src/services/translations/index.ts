import LocalizedStrings from 'react-localization';

import nb from '../../l10n/nb.json';
import nn from '../../l10n/nn.json';
import en from '../../l10n/en.json';

import type { ChangeLanguageCallback, FormatObject, Formatted } from './types';

import { Language } from './enums';

class TranslationsService {
  private language: Language;

  private changeLanguageCallback?: ChangeLanguageCallback;

  private readonly translations = new LocalizedStrings({
    [Language.NB]: nb,
    [Language.NN]: nn,
    [Language.EN]: en
  });

  public async init(
    language: Language,
    callback?: ChangeLanguageCallback
  ): Promise<void> {
    this.language = language;
    this.changeLanguageCallback = callback;

    this.translations.setLanguage(this.language);
  }

  public getLanguage(): Language {
    return this.language;
  }

  public translate<T extends Formatted>(
    key: string,
    values?: FormatObject<T>
  ): Array<string | T> | string {
    const translation = key
      .split('.')
      .reduce(
        (previous, current) => (previous as any)?.[current],
        this.translations
      );

    return this.translations.formatString(
      translation.toString(),
      values as any
    );
  }

  public changeLanguage(language: Language): void {
    this.language = language;

    this.translations.setLanguage(this.language);

    this.changeLanguageCallback?.(this.language);
  }
}

export default new TranslationsService();
export { Language } from './enums';
export type { Formatted, FormatObject } from './types';
