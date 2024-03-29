// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Request.module.scss";
import FirstScreenImage from "../../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../../components/FixLinks/FixLinks";
import LandingMultiLink from "../../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../../components/LandingMonoLink/LandingMonoLink";
import Faq from "../../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import FeedbackComponent from "../../components/feedback/FeedbackComponent";
import FormChildrenRequestPresentation from "../../components/FormChildrenRequestPresentation/FormChildrenRequestPresentation";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../../constants/stylesconstants";
// ------------------------------------------

export default function Requestacourse({ data }) {
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
      title={data.requestacoursepagedata.meta.title}
      keywords={data.requestacoursepagedata.meta.keywords}
      description={data.requestacoursepagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.requestacoursepagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.requestacoursepagedata.firstscreen.h1title}
              h1subtitle={data.requestacoursepagedata.firstscreen.h1subtitle}
              altimage={data.requestacoursepagedata.firstscreen.imagealt}
              nameimage={data.requestacoursepagedata.firstscreen.imagename}
              urlvideo={data.requestacoursepagedata.firstscreen.urlvideo}
              titlevideo={data.requestacoursepagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.requestacoursepagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.requestacoursepagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.requestacoursepagedata.firstscreen.h1title}
              h1subtitle={data.requestacoursepagedata.firstscreen.h1subtitle}
              altimage={data.requestacoursepagedata.firstscreen.imagealt}
              nameimage={data.requestacoursepagedata.firstscreen.imagename}
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : null}

      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Конец */}

      {/* ------------ блоки для конкретной страницы (начало) ------------ */}

      <section className={styles.main__coursepresentation}>
        <div className={styles.main__coursepresentation__container}>
          <FeedbackComponent
            title={data.coursedata.listcourse[0].requestcourse.title}
            feedbackcomponenttextdata={
              data.coursedata.listcourse[0].requestcourse.text
            }
            feedbackcomponentabouticondata={
              data.coursedata.listcourse[0].requestcourse.abouticonspoint
            }
          >
            <FormChildrenRequestPresentation
              inputformchildrenrequestpresentationdata={
                data.coursedata.listcourse[0].requestcourse.form.input
              }
              textareatrue={
                data.coursedata.listcourse[0].requestcourse.form.textarea
                  .istextarea
              }
              textareaplaceholder={
                data.coursedata.listcourse[0].requestcourse.form.textarea
                  .placeholder
              }
              buttonattachfiletrue={
                data.coursedata.listcourse[0].requestcourse.form
                  .buttonattachfile.isbuttonattachfile
              }
              buttonattachfiletype={
                data.coursedata.listcourse[0].requestcourse.form
                  .buttonattachfile.type
              }
              buttonattachfiletext={
                data.coursedata.listcourse[0].requestcourse.form
                  .buttonattachfile.buttontext
              }
              buttonattachfilename={
                data.coursedata.listcourse[0].requestcourse.form
                  .buttonattachfile.filenametext
              }
              buttonsendtype={
                data.coursedata.listcourse[0].requestcourse.form.buttonsend.type
              }
              buttonsendtext={
                data.coursedata.listcourse[0].requestcourse.form.buttonsend
                  .buttontext
              }
            />
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.requestacoursepagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.requestacoursepagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.requestacoursepagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.requestacoursepagedata.faq.faqtitle}
              faqdata={data.requestacoursepagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.requestacoursepagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.requestacoursepagedata.landingmultilink
              }
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

      {data.requestacoursepagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.requestacoursepagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/requestacourse_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
