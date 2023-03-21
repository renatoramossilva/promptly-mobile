export const makeTrans = (string) => string;

export const getTrans = (item, field, lang) => {
  if (!item) {
    return '';
  }
  if (lang && Object.keys(item).includes('i18n')) {
    const langNoDialect = lang.substr(0, 2);
    if (item.i18n && Object.keys(item.i18n).includes(`${field}_${lang}`)) {
      return item.i18n[`${field}_${lang}`];
    } else if (
      item.i18n &&
      Object.keys(item.i18n).includes(`${field}_${langNoDialect}`)
    ) {
      return item.i18n[`${field}_${langNoDialect}`];
    }
  }
  return item[field];
};
