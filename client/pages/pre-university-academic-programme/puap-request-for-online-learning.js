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

export default function Puaprequestforonlinelearning({ data }) {
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
      title={data.puaprequestforonlinelearningpagedata.meta.title}
      keywords={data.puaprequestforonlinelearningpagedata.meta.keywords}
      description={data.puaprequestforonlinelearningpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.puaprequestforonlinelearningpagedata.firstscreen.firstscreentype ===
      "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={
                data.puaprequestforonlinelearningpagedata.firstscreen.h1title
              }
              h1subtitle={
                data.puaprequestforonlinelearningpagedata.firstscreen.h1subtitle
              }
              altimage={
                data.puaprequestforonlinelearningpagedata.firstscreen.imagealt
              }
              nameimage={
                data.puaprequestforonlinelearningpagedata.firstscreen.imagename
              }
              urlvideo={
                data.puaprequestforonlinelearningpagedata.firstscreen.urlvideo
              }
              titlevideo={
                data.puaprequestforonlinelearningpagedata.firstscreen.titlevideo
              }
              videobuttontitle={
                data.puaprequestforonlinelearningpagedata.firstscreen
                  .videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.puaprequestforonlinelearningpagedata.firstscreen
          .firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={
                data.puaprequestforonlinelearningpagedata.firstscreen.h1title
              }
              h1subtitle={
                data.puaprequestforonlinelearningpagedata.firstscreen.h1subtitle
              }
              altimage={
                data.puaprequestforonlinelearningpagedata.firstscreen.imagealt
              }
              nameimage={
                data.puaprequestforonlinelearningpagedata.firstscreen.imagename
              }
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
            title={data.puapdata.onlinelearning.requestonlinelearning.title}
            feedbackcomponenttextdata={
              data.puapdata.onlinelearning.requestonlinelearning.text
            }
            feedbackcomponentabouticondata={
              data.puapdata.onlinelearning.requestonlinelearning.abouticonspoint
            }
          >
            <FormChildrenRequestPresentation
              inputformchildrenrequestpresentationdata={
                data.puapdata.onlinelearning.requestonlinelearning.form.input
              }
              textareatrue={
                data.puapdata.onlinelearning.requestonlinelearning.form.textarea
                  .istextarea
              }
              textareaplaceholder={
                data.puapdata.onlinelearning.requestonlinelearning.form.textarea
                  .placeholder
              }
              buttonattachfiletrue={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonattachfile.isbuttonattachfile
              }
              buttonattachfiletype={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonattachfile.type
              }
              buttonattachfiletext={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonattachfile.buttontext
              }
              buttonattachfilename={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonattachfile.filenametext
              }
              buttonsendtype={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonsend.type
              }
              buttonsendtext={
                data.puapdata.onlinelearning.requestonlinelearning.form
                  .buttonsend.buttontext
              }
            />
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.puaprequestforonlinelearningpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.puaprequestforonlinelearningpagedata.landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.puaprequestforonlinelearningpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.puaprequestforonlinelearningpagedata.faq.faqtitle}
              faqdata={
                data.puaprequestforonlinelearningpagedata.faq.questionanswer
              }
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.puaprequestforonlinelearningpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.puaprequestforonlinelearningpagedata.landingmultilink
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

      {data.puaprequestforonlinelearningpagedata.islandingmultilink ? (
        <FixLinks
          fixlinkdata={
            data.puaprequestforonlinelearningpagedata.landingmultilink
          }
        />
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
    `${process.env.FETCH_URL}:5000/api/puaprequestforonlinelearning_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
