// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Puap-portfolio.module.scss";
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
import Image from "next/image";
import ThematicPointList from "../../components/ThematicPointList/ThematicPointList";
import LinkText from "../../components/LinkText/LinkText";
import ParagraphGrid from "../../components/ParagraphGrid/ParagraphGrid";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import {
  h2componentbordertrue,
  h2componentbgthemewhite,
  h2componentbgthemeblack,
  h2componentborderfalse,
  landingmonolinkbgcolorsmoky,
} from "../../constants/stylesconstants";
// ------------------------------------------

export default function Puapportfolio({ data }) {
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
      title={data.puapportfoliopagedata.meta.title}
      keywords={data.puapportfoliopagedata.meta.keywords}
      description={data.puapportfoliopagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.puapportfoliopagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.puapportfoliopagedata.firstscreen.h1title}
              h1subtitle={data.puapportfoliopagedata.firstscreen.h1subtitle}
              altimage={data.puapportfoliopagedata.firstscreen.imagealt}
              nameimage={data.puapportfoliopagedata.firstscreen.imagename}
              urlvideo={data.puapportfoliopagedata.firstscreen.urlvideo}
              titlevideo={data.puapportfoliopagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.puapportfoliopagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.puapportfoliopagedata.firstscreen.firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.puapportfoliopagedata.firstscreen.h1title}
              h1subtitle={data.puapportfoliopagedata.firstscreen.h1subtitle}
              altimage={data.puapportfoliopagedata.firstscreen.imagealt}
              nameimage={data.puapportfoliopagedata.firstscreen.imagename}
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
            H2Title={data.portfoliodata.aboutportfolio.title}
            H2ComponentSubtitle={data.portfoliodata.aboutportfolio.text}
            H2ComponentUIBorder={h2componentbordertrue}
            H2ComponentUITheme={h2componentbgthemewhite}
          />
        </div>
      </section>
      <section className={styles.main__aboutportfolio}>
        <div className={styles.main__aboutportfolio__container}>
          <H2Component
            H2Title={data.puapdata.whatdoesthepuap.title}
            H2ComponentSubtitle={data.puapdata.whatdoesthepuap.text}
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemeblack}
          />
        </div>
        <div className={styles.main__aboutportfolio__borderbottom}></div>
        <div className={styles.main__thematicpointlist__container}>
          <ThematicPointList
            PointListTitle={
              data.portfoliodata.portfoliocomponents.portfoliocomponentstitle
            }
            ThematicPointlistItems={
              data.portfoliodata.portfoliocomponents.portfoliolist
            }
          />
          <div className={styles.main__thematicpointlist__linktext}>
            <LinkText
              linktextstate={"whitewhite"}
              linktexturl={data.portfoliodata.puapurl}
              linktextcontent={data.portfoliodata.puaptexturl}
            />
          </div>
        </div>
        <div className={styles.main__aboutportfolio__patternbig}></div>
        <div className={styles.main__aboutportfolio__patternsmall}></div>
      </section>
      <section className={styles.main__diplomimage}>
        <Image
          src={`/images/${data.portfoliodata.portfolioimagename}`}
          alt={data.portfoliodata.portfoliotexturl}
          fill
        />
      </section>

      <section className={styles.main__paragraphgrid}>
        <div className={styles.main__paragraphgrid__container}>
          <ParagraphGrid
            paragraphgriddata={data.portfoliodata.portfoliocomponents.portfoliolist.filter(
              (e) => e.isportfoliolisttext
            )}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.puapportfoliopagedata.landingmonolink.length !== 0 ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.puapportfoliopagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {Object.keys(data.puapportfoliopagedata.faq).length !== 0 ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.puapportfoliopagedata.faq.faqtitle}
              faqdata={data.puapportfoliopagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.puapportfoliopagedata.landingmultilink.length !== 0 ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={data.puapportfoliopagedata.landingmultilink}
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

      {data.puapportfoliopagedata.landingmultilink !== 0 ? (
        <FixLinks fixlinkdata={data.puapportfoliopagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/puapportfolio_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
