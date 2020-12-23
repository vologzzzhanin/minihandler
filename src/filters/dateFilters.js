import moment from 'moment'

export function defaultFilter(value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY hh:mm')
  }
}

export function localeFilter(value) {
  const options = {
      day: "numeric",
      month: "short",
      year: "numeric"
  }
  const LOCALE = navigator.language || navigator.userLanguage
  return new Intl.DateTimeFormat(LOCALE, options).format(new Date(value))
}
