export interface ISportModel {
  id: number;
  slug: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  name_translations?: INameTranslation;
}

export interface INameTranslation {
  'en'?: string;
  'ru'?: string;
  'de'?: string;
  'es'?: string;
  'fr'?: string;
  'zh'?: string;
  'tr'?: string;
  'el'?: string;
  'it'?: string;
  'nl'?: string;
  'pt'?: string;
}
