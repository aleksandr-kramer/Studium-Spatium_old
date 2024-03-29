// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/List-of-seminars.module.scss";
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
import DescriptionOfNodes from "../../components/DescriptionOfNodes/DescriptionOfNodes";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import {
  h2componentbordertrue,
  h2componentbgthemewhite,
  landingmonolinkbgcolorsmoky,
} from "../../constants/stylesconstants";
// ------------------------------------------

export default function Listofseminars({ data }) {
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
      title={data.listofseminarspagedata.meta.title}
      keywords={data.listofseminarspagedata.meta.keywords}
      description={data.listofseminarspagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.listofseminarspagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.listofseminarspagedata.firstscreen.h1title}
              h1subtitle={data.listofseminarspagedata.firstscreen.h1subtitle}
              altimage={data.listofseminarspagedata.firstscreen.imagealt}
              nameimage={data.listofseminarspagedata.firstscreen.imagename}
              urlvideo={data.listofseminarspagedata.firstscreen.urlvideo}
              titlevideo={data.listofseminarspagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.listofseminarspagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.listofseminarspagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.listofseminarspagedata.firstscreen.h1title}
              h1subtitle={data.listofseminarspagedata.firstscreen.h1subtitle}
              altimage={data.listofseminarspagedata.firstscreen.imagealt}
              nameimage={data.listofseminarspagedata.firstscreen.imagename}
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
            H2Title={data.seminardata.aboutseminars.aboutseminarstitle}
            H2ComponentSubtitle={
              data.seminardata.aboutseminars.aboutseminarstext
            }
            H2ComponentUIBorder={h2componentbordertrue}
            H2ComponentUITheme={h2componentbgthemewhite}
          />
        </div>
      </section>
      <section className={styles.main__descriptionofnodes}>
        <div className={styles.main__descriptionofnodes__patternbigtop}></div>
        <div
          className={styles.main__descriptionofnodes__patternsmallbottom}
        ></div>

        <div className={styles.main__descriptionofnodes__container}>
          <DescriptionOfNodes
            descriptionofnodestitle={
              data.seminardata.aboutseminars.listseminarstitle
            }
            linktextstate={"greenishtransporent"}
            descriptionofnodesdata={data.seminardata.listseminars}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.listofseminarspagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.listofseminarspagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.listofseminarspagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.listofseminarspagedata.faq.faqtitle}
              faqdata={data.listofseminarspagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.listofseminarspagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.listofseminarspagedata.landingmultilink
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

      {data.listofseminarspagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.listofseminarspagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/listofseminars_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
