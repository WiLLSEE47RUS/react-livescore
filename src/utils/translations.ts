export const getTranslations = (obj: any): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (obj?.name_translations?.ru ? obj.name_translations.ru : obj?.name) as string;
};

