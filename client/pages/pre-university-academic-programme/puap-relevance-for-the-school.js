// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Info-pages.module.scss";
import FirstScreenImage from "../../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../../components/FixLinks/FixLinks";
import LandingMultiLink from "../../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../../components/LandingMonoLink/LandingMonoLink";
import Faq from "../../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import ContentInfoPages from "../../components/ContentInfoPages/ContentInfoPages";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../../constants/stylesconstants";
// ------------------------------------------

export default function Puaprelevancefortheschool({ data }) {
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
      title={data.puaprelevancefortheschoolpagedata.meta.title}
      keywords={data.puaprelevancefortheschoolpagedata.meta.keywords}
      description={data.puaprelevancefortheschoolpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.puaprelevancefortheschoolpagedata.firstscreen.firstscreentype ===
      "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={
                data.puaprelevancefortheschoolpagedata.firstscreen.h1title
              }
              h1subtitle={
                data.puaprelevancefortheschoolpagedata.firstscreen.h1subtitle
              }
              altimage={
                data.puaprelevancefortheschoolpagedata.firstscreen.imagealt
              }
              nameimage={
                data.puaprelevancefortheschoolpagedata.firstscreen.imagename
              }
              urlvideo={
                data.puaprelevancefortheschoolpagedata.firstscreen.urlvideo
              }
              titlevideo={
                data.puaprelevancefortheschoolpagedata.firstscreen.titlevideo
              }
              videobuttontitle={
                data.puaprelevancefortheschoolpagedata.firstscreen
                  .videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.puaprelevancefortheschoolpagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={
                data.puaprelevancefortheschoolpagedata.firstscreen.h1title
              }
              h1subtitle={
                data.puaprelevancefortheschoolpagedata.firstscreen.h1subtitle
              }
              altimage={
                data.puaprelevancefortheschoolpagedata.firstscreen.imagealt
              }
              nameimage={
                data.puaprelevancefortheschoolpagedata.firstscreen.imagename
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : null}

      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Конец */}

      {/* ------------ блоки для конкретной страницы (начало) ------------ */}

      <section className={styles.main__contentinfopages}>
        <div className={styles.main__contentinfopages__container}>
          <ContentInfoPages
            contentinfopagesnavdata={data.infopagenavigationdata}
            contentinfopagesarticledata={data.articledata.article}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.puaprelevancefortheschoolpagedata.landingmonolink.length !== 0 ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.puaprelevancefortheschoolpagedata.landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {Object.keys(data.puaprelevancefortheschoolpagedata.faq).length !== 0 ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.puaprelevancefortheschoolpagedata.faq.faqtitle}
              faqdata={
                data.puaprelevancefortheschoolpagedata.faq.questionanswer
              }
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.puaprelevancefortheschoolpagedata.landingmultilink.length !== 0 ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.puaprelevancefortheschoolpagedata.landingmultilink
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

      {data.puaprelevancefortheschoolpagedata.landingmultilink !== 0 ? (
        <FixLinks
          fixlinkdata={data.puaprelevancefortheschoolpagedata.landingmultilink}
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
    `${process.env.FETCH_URL}:5000/api/puaprelevancefortheschool_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
