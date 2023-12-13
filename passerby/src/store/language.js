import { defineStore } from "pinia";
import router from "../router/index";

export const language = defineStore("language", {
  state: () => ({
    nowLanguage: "en",
    pages: {
      index: {
        zh: {
          title: "欢迎！！！",
        },
        en: {
          title: "Welcome!",
        },
        fr: {
          title: "Bonjour!",
        },
        jp: {
          title: "ようこそ！",
        },
      },
      chat: {
        cn: {},
        en: {},
      },
    },
  }),
  getters: {},
  actions: {
    changeLanguage(language = "en") {
      if (language == "zh") {
        this.nowLanguage = "zh";
        console.log("zh", this.nowLanguage);
      } else if (language == "en") {
        this.nowLanguage = "en";
        console.log("zh", this.nowLanguage);
      } else if (language == "fr") {
        this.nowLanguage = "fr";
        console.log("zh", this.nowLanguage);
      } else if (language == "jp") {
        this.nowLanguage = "jp";
        console.log("zh", this.nowLanguage);
      }
    },
  },
});
