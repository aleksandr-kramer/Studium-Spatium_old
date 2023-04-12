// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Personal-supervisor.module.scss";
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
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import StepComponent from "../../components/StepComponent/StepComponent";
import OrderChildrenImageText from "../../components/OrderChildrenImageText/OrderChildrenImageText";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import {
  h2componentbgthemesmoky,
  h2componentborderfalse,
  landingmonolinkbgcolorsmoky,
} from "../../constants/stylesconstants";
// ------------------------------------------

export default function Personalsupervisor({ data }) {
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
      title={data.personalsupervisorpagedata.meta.title}
      keywords={data.personalsupervisorpagedata.meta.keywords}
      description={data.personalsupervisorpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.personalsupervisorpagedata.firstscreen.firstscreentype ===
      "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.personalsupervisorpagedata.firstscreen.h1title}
              h1subtitle={
                data.personalsupervisorpagedata.firstscreen.h1subtitle
              }
              altimage={data.personalsupervisorpagedata.firstscreen.imagealt}
              nameimage={data.personalsupervisorpagedata.firstscreen.imagename}
              urlvideo={data.personalsupervisorpagedata.firstscreen.urlvideo}
              titlevideo={
                data.personalsupervisorpagedata.firstscreen.titlevideo
              }
              videobuttontitle={
                data.personalsupervisorpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.personalsupervisorpagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.personalsupervisorpagedata.firstscreen.h1title}
              h1subtitle={
                data.personalsupervisorpagedata.firstscreen.h1subtitle
              }
              altimage={data.personalsupervisorpagedata.firstscreen.imagealt}
              nameimage={data.personalsupervisorpagedata.firstscreen.imagename}
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
            // orderblankinfodata={selectTranslate().Supervising.Order}
            orderblankinfodata={data.supervisordata.supervisordetails.order}
            orderblankbuttondata={
              data.supervisordata.supervisordetails.orderlink
            }
            // orderblankbuttondata={selectTranslate().Supervising.OrderLink}
            fees={data.optiondata.fees}
            price={data.supervisordata.supervisordetails.price}
            currency={data.optiondata.currency}
            currencyrate={data.optiondata.currencyrate}
            priceperiod={data.supervisordata.supervisordetails.priceperiod}
          >
            <OrderChildrenImageText
              Title={
                data.supervisordata.supervisordetails.supervisorincludedtitle
              }
              orderchildrenimagetextdata={
                data.supervisordata.supervisordetails.supervisorincluded
              }
            />
          </OrderComponent>
        </div>
      </section>
      <section className={styles.main__stepcomponent}>
        <div className={styles.main__stepcomponent__container}>
          <h2 className={styles.main__stepcomponenttitle}>
            {data.supervisordata.howtostartsupervisor.howtostartsupervisortitle}
          </h2>
          <StepComponent
            stepcomponentword={data.optiondata.stepcomponentword}
            stepcomponentdata={
              data.supervisordata.howtostartsupervisor.howtostartsupervisorstep
            }
          />
        </div>
      </section>
      <section className={styles.main__h2componentaboutsupervising}>
        <div className={styles.main__h2componentaboutsupervising__container}>
          <H2Component
            H2Title={data.supervisordata.whyneedsupervisor.title}
            H2ComponentSubtitle={data.supervisordata.whyneedsupervisor.text}
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemesmoky}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.personalsupervisorpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.personalsupervisorpagedata.landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.personalsupervisorpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.personalsupervisorpagedata.faq.faqtitle}
              faqdata={data.personalsupervisorpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.personalsupervisorpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.personalsupervisorpagedata.landingmultilink
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

      {data.personalsupervisorpagedata.islandingmultilink ? (
        <FixLinks
          fixlinkdata={data.personalsupervisorpagedata.landingmultilink}
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
    `${process.env.FETCH_URL}:5000/api/personalsupervisor_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
