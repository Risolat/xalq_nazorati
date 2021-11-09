import uz from "../languages/uz-UZ.js"
import ru from "../languages/ru-RU.js";
import oz from "../languages/o'z-O'Z.js";


export const i18N = {
    loadLanguagesAsync: true,
    locales: ["uz", "ru", "oz"],
    defaultLocale: "uz",
    rootRedirect: 'uz',
    strategy: 'prefix',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true
    },
    routes: {
        index: {
            uz: "/",
            ru: "/",
            oz: "/"
        }
    },
    vueI18n: {
        fallbackLocale: "uz",
        messages: { uz, ru, oz },
        warnHtmlInMessage: 'off',
        disableNoTranslationWarning: true,
        silentTranslationWarn: true
    }
}