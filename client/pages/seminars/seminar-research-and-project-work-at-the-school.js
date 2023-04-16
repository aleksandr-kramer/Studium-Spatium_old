// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Seminar-content.module.scss";
import FirstScreenImage from "../../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../../components/FixLinks/FixLinks";
import LandingMultiLink from "../../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../../components/LandingMonoLink/LandingMonoLink";
import Faq from "../../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import OrderChildrenParagraph from "../../components/OrderChildrenParagraph/OrderChildrenParagraph";
import DescriptionOfPoints from "../../components/DescriptionOfPoints/DescriptionOfPoints";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../../constants/stylesconstants";
// ------------------------------------------

export default function Seminarresearchandprojectworkattheschool({ data }) {
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
      title={data.seminarresearchandprojectworkattheschoolpagedata.meta.title}
      keywords={
        data.seminarresearchandprojectworkattheschoolpagedata.meta.keywords
      }
      description={
        data.seminarresearchandprojectworkattheschoolpagedata.meta.description
      }
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.seminarresearchandprojectworkattheschoolpagedata.firstscreen
        .firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.h1title
              }
              h1subtitle={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.h1subtitle
              }
              altimage={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.imagealt
              }
              nameimage={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.imagename
              }
              urlvideo={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.urlvideo
              }
              titlevideo={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.titlevideo
              }
              videobuttontitle={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.seminarresearchandprojectworkattheschoolpagedata.firstscreen
          .firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.h1title
              }
              h1subtitle={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.h1subtitle
              }
              altimage={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.imagealt
              }
              nameimage={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .firstscreen.imagename
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : null}

      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Конец */}

      {/* ------------ блоки для конкретной страницы (начало) ------------ */}
      <section className={styles.main__ordercomponent}>
        <div className={styles.main__ordercomponent__container}>
          <OrderComponent
            orderblankinfodata={data.seminardata.listseminars[1].order}
            orderblankbuttondata={data.seminardata.listseminars[1].orderlink}
            fees={data.optiondata.fees}
            price={data.seminardata.listseminars[1].price}
            currency={data.optiondata.currency}
            currencyrate={data.optiondata.currencyrate}
            priceperiod={data.seminardata.listseminars[1].priceperiod}
          >
            <OrderChildrenParagraph
              orderchildrenparagraphdata={
                data.seminardata.listseminars[1].generalaboutmodule
              }
            />
          </OrderComponent>
        </div>
      </section>
      <section className={styles.main__descriptionofpoints}>
        <div className={styles.main__descriptionofpoints__patternbigtop}></div>
        <div
          className={styles.main__descriptionofpoints__patternsmallbottom}
        ></div>
        <div className={styles.main__descriptionofpoints__container}>
          <DescriptionOfPoints
            Name={data.seminardata.listseminars[1].namemodule}
            descriptionofpointsdata={
              data.seminardata.listseminars[1].listoftopics
            }
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.seminarresearchandprojectworkattheschoolpagedata
        .islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.seminarresearchandprojectworkattheschoolpagedata
                  .landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.seminarresearchandprojectworkattheschoolpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={
                data.seminarresearchandprojectworkattheschoolpagedata.faq
                  .faqtitle
              }
              faqdata={
                data.seminarresearchandprojectworkattheschoolpagedata.faq
                  .questionanswer
              }
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.seminarresearchandprojectworkattheschoolpagedata
        .islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.seminarresearchandprojectworkattheschoolpagedata
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

      {data.seminarresearchandprojectworkattheschoolpagedata
        .islandingmultilink ? (
        <FixLinks
          fixlinkdata={
            data.seminarresearchandprojectworkattheschoolpagedata
              .landingmultilink
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
    `${process.env.FETCH_URL}:5000/api/seminarresearchandprojectworkattheschool_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
