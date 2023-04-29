// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../components/MainLayout/MainLayout";
import styles from "../styles/pages/Contact.module.scss";
import FirstScreenImage from "../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../components/FixLinks/FixLinks";
import LandingMultiLink from "../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../components/LandingMonoLink/LandingMonoLink";
import Faq from "../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import FeedbackComponent from "../components/feedback/FeedbackComponent";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../constants/stylesconstants";
// ------------------------------------------

export default function Askaquestion({ data }) {
  const [yourname, setYourname] = useState("");
  const [email, setEmail] = useState("");
  const [questiontext, setQuestiontext] = useState("");
  const [backenderrors, setBackenderrors] = useState([]);
  const router = useRouter();

  const sendQuestion = async () => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_AXIOS_URL}askaquestion`, {
          yourname,
          email,
          questiontext,
        })
        .then(() => router.push("/thanks"));
    } catch (error) {
      console.log(error);
      setBackenderrors(error.response.data);
    }
  };

  return (
    <MainLayout
      // ------------------------------------------
      //Стандартные значения для всех страниц сайта
      // ------------------------------------------
      AltLogoFooter={data.logodata.img_alt}
      AltLogoHeaderTop={data.logodata.img_alt}
      AltLogoHeaderBottom={data.logodata.img_alt}
      ImgLogoHeaderBottom={data.logodata.img_name_header}
      ImgLogoHeaderTop={data.logodata.img_name_header}
      ImgLogoFooter={data.logodata.img_name_footer}
      socialnetworkdata={data.socialnetworkdata}
      menulinksdomain={data.navigationdata.domainlink}
      menulinkssubdomain={data.navigationdata.subdomainlink}
      textbeforespan={data.footerdata.textbeforespan}
      textspan={data.footerdata.textspan}
      textafterspan={data.footerdata.textafterspan}
      titlecontact={data.footerdata.titlecontact}
      contactemail={data.footerdata.contactemail}
      // ------------------------------------------
      // Переменные значения для конкретных страниц сайта
      // ------------------------------------------
      title={data.askaquestionpagedata.meta.title}
      keywords={data.askaquestionpagedata.meta.keywords}
      description={data.askaquestionpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.askaquestionpagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.askaquestionpagedata.firstscreen.h1title}
              h1subtitle={data.askaquestionpagedata.firstscreen.h1subtitle}
              altimage={data.askaquestionpagedata.firstscreen.imagealt}
              nameimage={data.askaquestionpagedata.firstscreen.imagename}
              urlvideo={data.askaquestionpagedata.firstscreen.urlvideo}
              titlevideo={data.askaquestionpagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.askaquestionpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.askaquestionpagedata.firstscreen.firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.askaquestionpagedata.firstscreen.h1title}
              h1subtitle={data.askaquestionpagedata.firstscreen.h1subtitle}
              altimage={data.askaquestionpagedata.firstscreen.imagealt}
              nameimage={data.askaquestionpagedata.firstscreen.imagename}
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : null}

      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Конец */}

      {/* ------------ блоки для конкретной страницы (начало) ------------ */}

      <section className={styles.main__contact}>
        <div className={styles.main__contact__container}>
          <FeedbackComponent
            title={data.servicedata.request[0].title}
            feedbackcomponenttextdata={data.servicedata.request[0].text}
            feedbackcomponentabouticondata={
              data.servicedata.request[0].abouticonspoint
            }
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              name="questionform"
              className={styles.main__formrequest}
            >
              {backenderrors.length !== 0 ? (
                <ul className={styles.main__formrequest__erroritems}>
                  {backenderrors.map((e) => (
                    <li
                      className={styles.main__formrequest__erroritem}
                      key={e.path}
                    >
                      {e.msg}
                    </li>
                  ))}
                </ul>
              ) : null}
              <input
                onChange={(e) => setYourname(e.target.value)}
                name="yourname"
                type={data.servicedata.request[0].form.input[0].fieldtype}
                placeholder={
                  data.servicedata.request[0].form.input[0].placeholder
                }
                className={styles.main__formrequest__input}
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type={data.servicedata.request[0].form.input[1].fieldtype}
                placeholder={
                  data.servicedata.request[0].form.input[1].placeholder
                }
                className={styles.main__formrequest__input}
              />

              <textarea
                onChange={(e) => setQuestiontext(e.target.value)}
                name="questiontext"
                placeholder={
                  data.servicedata.request[0].form.textarea.placeholder
                }
                className={styles.main__formrequest__textarea}
              />

              <button
                onClick={sendQuestion}
                name="questionbutton"
                type={data.servicedata.request[0].form.buttonsend.fieldtype}
                className={styles.main__formrequest__sendbutton}
              >
                {data.servicedata.request[0].form.buttonsend.buttontext}
              </button>
            </form>
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.askaquestionpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.askaquestionpagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.askaquestionpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.askaquestionpagedata.faq.faqtitle}
              faqdata={data.askaquestionpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.askaquestionpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={data.askaquestionpagedata.landingmultilink}
            />
          </div>
          <div
            className={styles.main__landingmultilink__patternsmall__top}
          ></div>
          <div
            className={styles.main__landingmultilink__patternsmall__bottom}
          ></div>
        </section>
      ) : null}

      {data.askaquestionpagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.askaquestionpagedata.landingmultilink} />
      ) : null}
    </MainLayout>
  );
}

{
  /* ------------ Обязательные блоки-шаблоны для страниц (конец) ------------ */
}

export async function getStaticProps({ locale }) {
  const lang = locale;
  const res = await fetch(
    `${process.env.FETCH_URL}:5000/api/askaquestion_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
