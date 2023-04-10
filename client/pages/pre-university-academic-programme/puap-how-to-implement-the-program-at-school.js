// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Step-pages.module.scss";
import FirstScreenImage from "../../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../../components/FixLinks/FixLinks";
import LandingMultiLink from "../../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../../components/LandingMonoLink/LandingMonoLink";
import Faq from "../../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import H2Component from "../../components/H2Component/H2Component";
import StepComponent from "../../components/StepComponent/StepComponent";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import {
  h2componentborderfalse,
  h2componentbgthemesmoky,
  landingmonolinkbgcolorsmoky,
} from "../../constants/stylesconstants";
// ------------------------------------------

export default function Puaphowtoimplementtheprogramatschool({ data }) {
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
      title={data.puaphowtoimplementtheprogramatschoolpagedata.meta.title}
      keywords={data.puaphowtoimplementtheprogramatschoolpagedata.meta.keywords}
      description={
        data.puaphowtoimplementtheprogramatschoolpagedata.meta.description
      }
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
        .firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .h1title
              }
              h1subtitle={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .h1subtitle
              }
              altimage={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .imagealt
              }
              nameimage={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .imagename
              }
              urlvideo={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .urlvideo
              }
              titlevideo={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .titlevideo
              }
              videobuttontitle={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
          .firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .h1title
              }
              h1subtitle={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .h1subtitle
              }
              altimage={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
                  .imagealt
              }
              nameimage={
                data.puaphowtoimplementtheprogramatschoolpagedata.firstscreen
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

      <section className={styles.main__h2component}>
        <div className={styles.main__h2component__container}>
          <H2Component
            H2Title={data.puapdata.relevancepuapforschoolandstudent.title}
            H2ComponentSubtitle={
              data.puapdata.relevancepuapforschoolandstudent.text
            }
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemesmoky}
          />
        </div>
      </section>
      <section className={styles.main__stepcomponent}>
        <div className={styles.main__stepcomponent__container}>
          <StepComponent
            stepcomponentword={data.optiondata.stepcomponentword}
            stepcomponentdata={data.puapdata.implementationprogramme}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.puaphowtoimplementtheprogramatschoolpagedata.landingmonolink
        .length !== 0 ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.puaphowtoimplementtheprogramatschoolpagedata
                  .landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {Object.keys(data.puaphowtoimplementtheprogramatschoolpagedata.faq)
        .length !== 0 ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={
                data.puaphowtoimplementtheprogramatschoolpagedata.faq.faqtitle
              }
              faqdata={
                data.puaphowtoimplementtheprogramatschoolpagedata.faq
                  .questionanswer
              }
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.puaphowtoimplementtheprogramatschoolpagedata.landingmultilink
        .length !== 0 ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.puaphowtoimplementtheprogramatschoolpagedata
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

      {data.puaphowtoimplementtheprogramatschoolpagedata.landingmultilink !==
      0 ? (
        <FixLinks
          fixlinkdata={
            data.puaphowtoimplementtheprogramatschoolpagedata.landingmultilink
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
    `${process.env.FETCH_URL}:5000/api/puaphowtoimplementtheprogramatschool_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
