import { Language } from './enums';

export type ChangeLanguageCallback = (language: Language) => void;

type Formatted = number | string | JSX.Element;
type FormatObject = Record<string, Formatted>;
