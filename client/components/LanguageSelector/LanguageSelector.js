import { useRouter } from "next/router";
import { language } from "../../locales/selectLanguage";
import styles from "./LanguageSelector.module.scss";
import Image from "next/image";
import languageselector from "../../public/uipictures/languageselector.png";
import { useState, useEffect } from "react";

function DeterminingInitialLanguage() {
  const router = useRouter();
  const { locale } = router;
  const initialLanguage =
    locale === "en"
      ? language.SelectLanguage[0]
      : locale === "es"
      ? language.SelectLanguage[1]
      : locale === "ru"
      ? language.SelectLanguage[2]
      : "";
  return initialLanguage;
}

export default function LanguageSelector() {
  const router = useRouter();
  const [activeLanguagePopUp, setActiveLanguagePopUp] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(
    DeterminingInitialLanguage()
  );

  useEffect(() => {
    const locale = activeLanguage.Code;
    router.push(router.pathname, router.pathname, { locale });
    // router.push(router.query, "/", { locale });
  }, [activeLanguage]);

  const languageitems = language.SelectLanguage.map(({ id, FullLang }) => (
    <li
      key={id}
      className={styles.LanguageSelector__item}
      onClick={() => setActiveLanguage(language.SelectLanguage[id])}
    >
      {FullLang}
    </li>
  ));

  useEffect(() => {
    const keyDownHandler = (e) =>
      e.code === "Escape" && activeLanguagePopUp
        ? setActiveLanguagePopUp(!activeLanguagePopUp)
        : null;
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [activeLanguagePopUp]);

  return (
    <div
      onClick={() => setActiveLanguagePopUp(!activeLanguagePopUp)}
      className={
        activeLanguagePopUp
          ? `${styles.LanguageSelector} ${styles.LanguageSelector__open}`
          : styles.LanguageSelector
      }
    >
      <div className={styles.LanguageSelector__backdrop}></div>
      <div className={styles.LanguageSelector__select}>
        <div className={styles.LanguageSelector__selectimg}>
          <Image
            src={languageselector}
            alt="Language Selector"
            width={14}
            height={11}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <span className={styles.LanguageSelector__selecttext}>
          {activeLanguage.FullLang}
        </span>
      </div>
      <div className={styles.LanguageSelector__dropdown}>
        <ul className={styles.LanguageSelector__items}>{languageitems}</ul>
      </div>
    </div>
  );
}
