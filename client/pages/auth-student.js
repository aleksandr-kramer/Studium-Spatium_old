// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../components/MainLayout/MainLayout";
// import styles from "../styles/pages/Authorization.module.scss";
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
import FormChildrenRequestPresentation from "../components/FormChildrenRequestPresentation/FormChildrenRequestPresentation";

// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../constants/stylesconstants";
// ------------------------------------------

export default function Authstudent({ data }) {
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
      title={data.authstudentpagedata.meta.title}
      keywords={data.authstudentpagedata.meta.keywords}
      description={data.authstudentpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.authstudentpagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.authstudentpagedata.firstscreen.h1title}
              h1subtitle={data.authstudentpagedata.firstscreen.h1subtitle}
              altimage={data.authstudentpagedata.firstscreen.imagealt}
              nameimage={data.authstudentpagedata.firstscreen.imagename}
              urlvideo={data.authstudentpagedata.firstscreen.urlvideo}
              titlevideo={data.authstudentpagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.authstudentpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.authstudentpagedata.firstscreen.firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.authstudentpagedata.firstscreen.h1title}
              h1subtitle={data.authstudentpagedata.firstscreen.h1subtitle}
              altimage={data.authstudentpagedata.firstscreen.imagealt}
              nameimage={data.authstudentpagedata.firstscreen.imagename}
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
            title={data.servicedata.request[3].title}
            feedbackcomponenttextdata={data.servicedata.request[3].text}
            feedbackcomponentabouticondata={
              data.servicedata.request[3].abouticonspoint
            }
          >
            <FormChildrenRequestPresentation
              inputformchildrenrequestpresentationdata={
                data.servicedata.request[3].form.input
              }
              textareatrue={
                data.servicedata.request[3].form.textarea.istextarea
              }
              textareaplaceholder={
                data.servicedata.request[3].form.textarea.placeholder
              }
              buttonattachfiletrue={
                data.servicedata.request[3].form.buttonattachfile
                  .isbuttonattachfile
              }
              buttonattachfiletype={
                data.servicedata.request[3].form.buttonattachfile.fieldtype
              }
              buttonattachfiletext={
                data.servicedata.request[3].form.buttonattachfile.buttontext
              }
              buttonattachfilename={
                data.servicedata.request[3].form.buttonattachfile.filenametext
              }
              buttonsendtype={
                data.servicedata.request[3].form.buttonsend.fieldtype
              }
              buttonsendtext={
                data.servicedata.request[3].form.buttonsend.buttontext
              }
            />
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.authstudentpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.authstudentpagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.authstudentpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.authstudentpagedata.faq.faqtitle}
              faqdata={data.authstudentpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.authstudentpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={data.authstudentpagedata.landingmultilink}
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

      {data.authstudentpagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.authstudentpagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/authstudent_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
