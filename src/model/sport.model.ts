export interface ISportModel {
  id: number;
  slug: string;
  name: string;
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
export interface ISportPayload{
  data: ISportModel[]
}
