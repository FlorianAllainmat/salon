import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

/**
 * Load locales locals json file
 */
function loadLocaleMessages(): LocaleMessages {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages: LocaleMessages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/**
 * New i18n
 */
export default new VueI18n({
  locale: navigator.language || 'fr',
  fallbackLocale: 'fr',
  messages: loadLocaleMessages(),
  silentFallbackWarn: true,
});
