const UI_EN = (await import('~/i18n/en/translation.json', { with: { type: 'json' } })).default

export const i18n = {
  DEFAULT_LOCALE: 'en',
  LOCALES: [
    { label: 'English', value: 'en', ui: UI_EN, intl: 'en-US' },
  ],
}

export type UIProps = typeof UI_EN