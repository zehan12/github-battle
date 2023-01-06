import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { StateContext } from "../context/store";

import gb from "./lng/gb.json";
import es from "../i18next/lng/es.json";

console.log(localStorage.getItem("lang"),"lang 0")

i18next.use(initReactI18next).init({
        resources:{
            GB:{
                translation:gb
            },
            ES:{
                translation:es
            }

        },
        lng: localStorage.getItem("lang") || "GB",
});

export default i18next;