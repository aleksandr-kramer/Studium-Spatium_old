// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Consultation.module.scss";
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
import OrderChildrenH2Component from "../../components/OrderChildrenH2Component/OrderChildrenH2Component";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import {
  h2componentbgthemesmoky,
  h2componentborderfalse,
  landingmonolinkbgcolorsmoky,
} from "../../constants/stylesconstants";
// ------------------------------------------

export default function Consultation({ data }) {
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
      title={data.consultationpagedata.meta.title}
      keywords={data.consultationpagedata.meta.keywords}
      description={data.consultationpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.consultationpagedata.firstscreen.firstscreentype === "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.consultationpagedata.firstscreen.h1title}
              h1subtitle={data.consultationpagedata.firstscreen.h1subtitle}
              altimage={data.consultationpagedata.firstscreen.imagealt}
              nameimage={data.consultationpagedata.firstscreen.imagename}
              urlvideo={data.consultationpagedata.firstscreen.urlvideo}
              titlevideo={data.consultationpagedata.firstscreen.titlevideo}
              videobuttontitle={
                data.consultationpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.consultationpagedata.firstscreen.firstscreentype === "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.consultationpagedata.firstscreen.h1title}
              h1subtitle={data.consultationpagedata.firstscreen.h1subtitle}
              altimage={data.consultationpagedata.firstscreen.imagealt}
              nameimage={data.consultationpagedata.firstscreen.imagename}
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
            orderblankinfodata={data.consultationdata.consultationdetails.order}
            orderblankbuttondata={
              data.consultationdata.consultationdetails.orderlink
            }
            fees={data.optiondata.fees}
            price={data.consultationdata.consultationdetails.price}
            currency={data.optiondata.currency}
            currencyrate={data.optiondata.currencyrate}
            priceperiod={data.consultationdata.consultationdetails.priceperiod}
          >
            <OrderChildrenH2Component
              Title={data.consultationdata.aboutconsultation.title}
              ParagraphItems={data.consultationdata.aboutconsultation.text}
              paragraphliststate="fontcolorbasecenter"
            />
          </OrderComponent>
        </div>
      </section>
      <section className={styles.main__stepcomponent}>
        <div className={styles.main__stepcomponent__container}>
          <h2 className={styles.main__stepcomponenttitle}>
            {
              data.consultationdata.howtogetconsultation
                .howtogetconsultationtitle
            }
          </h2>
          <StepComponent
            stepcomponentword={data.optiondata.stepcomponentword}
            stepcomponentdata={
              data.consultationdata.howtogetconsultation
                .howtogetconsultationstep
            }
          />
        </div>
      </section>
      <section className={styles.main__h2componentaboutconsultation}>
        <div className={styles.main__h2componentaboutconsultation__container}>
          <H2Component
            H2Title={data.consultationdata.whatgiveconsultation.title}
            H2ComponentSubtitle={
              data.consultationdata.whatgiveconsultation.text
            }
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemesmoky}
          />
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.consultationpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.consultationpagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.consultationpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.consultationpagedata.faq.faqtitle}
              faqdata={data.consultationpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.consultationpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={data.consultationpagedata.landingmultilink}
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

      {data.consultationpagedata.islandingmultilink ? (
        <FixLinks fixlinkdata={data.consultationpagedata.landingmultilink} />
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
    `${process.env.FETCH_URL}:5000/api/consultation_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
