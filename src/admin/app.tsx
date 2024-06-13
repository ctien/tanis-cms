import logo from "./extensions/logo-dark.png";

export default {
  config: {
    auth: { logo },
    head: { favicon: logo },
    menu: { logo },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Tanis Dashboard",
        "Auth.form.welcome.title": "Welcome to Tanis CMS!",
        "Auth.form.welcome.subtitle": "Powered by Adaorigin",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in Adaorigin. All saved data will be stored in your database.",
      },
    },
  },
  bootstrap(app: any) {
    console.log(app);
  },
};
