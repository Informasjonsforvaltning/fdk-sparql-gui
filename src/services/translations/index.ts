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

  public translate(key: string, values?: FormatObject): Formatted[] | string {
    return this.translations.formatString(
      this.translations.getString(key),
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
