import { defineStore } from "pinia";

export const language = defineStore("language", {
  state: () => ({
    nowLanguage: "en",
    pages: {
      home: {
        zh: {
          title: "欢迎！！！",
          tipTheme: "主题",
          tipMusic: "音乐",
          tipLanguage: "语言",
          tipScreen: "屏幕",
          tipInputPlaceholder: "请输入您的昵称",
          tipRandomAvatar: "随机",
          tipGender: "性别",
          tipStart: "开始",
        },
        en: {
          title: "Welcome!",
          tipTheme: "Theme",
          tipMusic: "Music",
          tipLanguage: "Language",
          tipScreen: "Screen",
          tipInputPlaceholder: "Please enter your nickname",
          tipRandomAvatar: "Random",
          tipGender: "Gender",
          tipStart: "Start",
        },
        fr: {
          title: "Bonjour!",
          tipTheme: "Thème",
          tipMusic: "Musique",
          tipLanguage: "Langue",
          tipScreen: "Écran",
          tipInputPlaceholder: "s'il vous plait, entrez ton surnom",
          tipRandomAvatar: "Aléatoire",
          tipGender: "Genre",
          tipStart: "Commencer",
        },
        jp: {
          title: "ようこそ！",
          tipTheme: "テーマ",
          tipMusic: "音楽",
          tipLanguage: "言語",
          tipScreen: "画面",
          tipInputPlaceholder: "ニックネームを入力してください",
          tipRandomAvatar: "ランダム",
          tipGender: "性別",
          tipStart: "始める",
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
