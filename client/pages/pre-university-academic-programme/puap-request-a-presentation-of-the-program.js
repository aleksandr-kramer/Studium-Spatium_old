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

export default function Puaprequestapresentationoftheprogram({ data }) {
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
      title={data.puaprequestapresentationoftheprogrampagedata.meta.title}
      keywords={data.puaprequestapresentationoftheprogrampagedata.meta.keywords}
      description={
        data.puaprequestapresentationoftheprogrampagedata.meta.description
      }
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.puaprequestapresentationoftheprogrampagedata.firstscreen
        .firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .h1title
              }
              h1subtitle={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .h1subtitle
              }
              altimage={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .imagealt
              }
              nameimage={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .imagename
              }
              urlvideo={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .urlvideo
              }
              titlevideo={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .titlevideo
              }
              videobuttontitle={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.puaprequestapresentationoftheprogrampagedata.firstscreen
          .firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .h1title
              }
              h1subtitle={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .h1subtitle
              }
              altimage={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .imagealt
              }
              nameimage={
                data.puaprequestapresentationoftheprogrampagedata.firstscreen
                  .imagename
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
            title={data.puapdata.requestprogrammepresentation.title}
            feedbackcomponenttextdata={
              data.puapdata.requestprogrammepresentation.text
            }
            feedbackcomponentabouticondata={
              data.puapdata.requestprogrammepresentation.abouticonspoint
            }
          >
            <FormChildrenRequestPresentation
              inputformchildrenrequestpresentationdata={
                data.puapdata.requestprogrammepresentation.form.input
              }
              textareatrue={
                data.puapdata.requestprogrammepresentation.form.textarea
                  .istextarea
              }
              textareaplaceholder={
                data.puapdata.requestprogrammepresentation.form.textarea
                  .placeholder
              }
              buttonattachfiletrue={
                data.puapdata.requestprogrammepresentation.form.buttonattachfile
                  .isbuttonattachfile
              }
              buttonattachfiletype={
                data.puapdata.requestprogrammepresentation.form.buttonattachfile
                  .type
              }
              buttonattachfiletext={
                data.puapdata.requestprogrammepresentation.form.buttonattachfile
                  .buttontext
              }
              buttonattachfilename={
                data.puapdata.requestprogrammepresentation.form.buttonattachfile
                  .filenametext
              }
              buttonsendtype={
                data.puapdata.requestprogrammepresentation.form.buttonsend.type
              }
              buttonsendtext={
                data.puapdata.requestprogrammepresentation.form.buttonsend
                  .buttontext
              }
            />
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.puaprequestapresentationoftheprogrampagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.puaprequestapresentationoftheprogrampagedata
                  .landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.puaprequestapresentationoftheprogrampagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={
                data.puaprequestapresentationoftheprogrampagedata.faq.faqtitle
              }
              faqdata={
                data.puaprequestapresentationoftheprogrampagedata.faq
                  .questionanswer
              }
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.puaprequestapresentationoftheprogrampagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.puaprequestapresentationoftheprogrampagedata
                  .landingmultilink
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

      {data.puaprequestapresentationoftheprogrampagedata.islandingmultilink ? (
        <FixLinks
          fixlinkdata={
            data.puaprequestapresentationoftheprogrampagedata.landingmultilink
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
    `${process.env.FETCH_URL}:5000/api/puaprequestapresentationoftheprogram_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
