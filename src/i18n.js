import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Translations for Portfolio page

const resources = {
  en: {
    translation: {
      "Nav About me": "About Me",
      "Nav Contact": "Contact",
      "Nav Projects": "Projects",

      "Section One Hi": "Hi, my name is Marcus...",
      "Section One And": "And I am a Front-End Developer from Bergen",

      "Section One Read": "Read More",
      "Section One Description":
        "I'm 24 years old and have been messing around with computers for a long time, like gaming and video editing. Working mostly with React, started out with HTML, CSS and JS.",

      "Projects MyProjects": "My Projects",
      "Projects Visit": "Visit",

      "Footer ContactMe": "Contact me >._.>",
    },
  },

  no: {
    translation: {
      "Nav About me": "Om Meg",
      "Nav Contact": "Kontakt",
      "Nav Projects": "Prosjekter",

      "Section One Hi": "Hei, jeg heter Marcus...",
      "Section One And": "Og jeg er en Front-End utvikler fra Bergen",

      "Section One Read": "Les Mer",
      "Section One Description":
        "Jeg er 24 år og har drevet med datamaskiner i lang tid, liker gaming og video redigering. Jobber mest med React nå, begynte med HTML, CSS og JS.",

      "Projects MyProjects": "Mine Prosjekter",
      "Projects Visit": "Besøk",

      "Footer ContactMe": "Kontakt meg >._.>",
    },
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "no",
  resources,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
