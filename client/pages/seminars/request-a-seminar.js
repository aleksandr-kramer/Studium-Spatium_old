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

export default function Requestaseminar({ data }) {
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
      title={data.requestaseminarpagedata.meta.title}
      keywords={data.requestaseminarpagedata.meta.keywords}
      description={data.requestaseminarpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.requestaseminarpagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.requestaseminarpagedata.firstscreen.h1title}
              h1subtitle={data.requestaseminarpagedata.firstscreen.h1subtitle}
              altimage={data.requestaseminarpagedata.firstscreen.imagealt}
              nameimage={data.requestaseminarpagedata.firstscreen.imagename}
              urlvideo={data.requestaseminarpagedata.firstscreen.urlvideo}
              titlevideo={data.requestaseminarpagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.requestaseminarpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.requestaseminarpagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.requestaseminarpagedata.firstscreen.h1title}
              h1subtitle={data.requestaseminarpagedata.firstscreen.h1subtitle}
              altimage={data.requestaseminarpagedata.firstscreen.imagealt}
              nameimage={data.requestaseminarpagedata.firstscreen.imagename}
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
            title={data.seminardata.listseminars[0].requestseminar.title}
            feedbackcomponenttextdata={
              data.seminardata.listseminars[0].requestseminar.text
            }
            feedbackcomponentabouticondata={
              data.seminardata.listseminars[0].requestseminar.abouticonspoint
            }
          >
            <FormChildrenRequestPresentation
              inputformchildrenrequestpresentationdata={
                data.seminardata.listseminars[0].requestseminar.form.input
              }
              textareatrue={
                data.seminardata.listseminars[0].requestseminar.form.textarea
                  .istextarea
              }
              textareaplaceholder={
                data.seminardata.listseminars[0].requestseminar.form.textarea
                  .placeholder
              }
              buttonattachfiletrue={
                data.seminardata.listseminars[0].requestseminar.form
                  .buttonattachfile.isbuttonattachfile
              }
              buttonattachfiletype={
                data.seminardata.listseminars[0].requestseminar.form
                  .buttonattachfile.type
              }
              buttonattachfiletext={
                data.seminardata.listseminars[0].requestseminar.form
                  .buttonattachfile.buttontext
              }
              buttonattachfilename={
                data.seminardata.listseminars[0].requestseminar.form
                  .buttonattachfile.filenametext
              }
              buttonsendtype={
                data.seminardata.listseminars[0].requestseminar.form.buttonsend
                  .type
              }
              buttonsendtext={
                data.seminardata.listseminars[0].requestseminar.form.buttonsend
                  .buttontext
              }
            />
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.requestaseminarpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.requestaseminarpagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.requestaseminarpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.requestaseminarpagedata.faq.faqtitle}
              faqdata={data.requestaseminarpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.requestaseminarpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.requestaseminarpagedata.landingmultilink
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

      {data.requestaseminarpagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.requestaseminarpagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/requestaseminar_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
