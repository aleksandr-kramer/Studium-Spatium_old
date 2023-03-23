import MainLayout from "../components/MainLayout/MainLayout";
import selectTranslate from "../utils/selectTranslate";
import styles from "../styles/pages/Index.module.scss";
import FirstScreenVideo from "../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../components/FixLinks/FixLinks";
import H2Component from "../components/H2Component/H2Component";
import ListModuleOfCourse from "../components/ListModuleOfCourse/ListModuleOfCourse";
import ThematicPointList from "../components/ThematicPointList/ThematicPointList";
import LinkText from "../components/LinkText/LinkText";
import LandingMultiLink from "../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../components/LandingMonoLink/LandingMonoLink";
import Faq from "../components/Faq/Faq";
import {
  h2componentbordertrue,
  h2componentborderfalse,
  h2componentbgthemewhite,
  h2componentbgthemeblack,
  landingmonolinkbgcolorsmoky,
} from "../constants/stylesconstants";

export default function Index({ data }) {
  return (
    <MainLayout
      title={selectTranslate().Pages.index.Meta.title}
      keywords={selectTranslate().Pages.index.Meta.keywords}
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
    >
      <section className={styles.main__firstscreenvideo}>
        <div className={styles.main__firstscreenvideo__container}>
          <FirstScreenVideo
            // h1title={selectTranslate().Pages.index.FirstScreenVideo.H1Title}
            h1title={data.indexpagedata.FirstScreenVideo.H1Title}
            // h1subtitle={
            //   selectTranslate().Pages.index.FirstScreenVideo.H1SubTitle
            // }
            h1subtitle={data.logodata.img_name_header}
            altimage={selectTranslate().Pages.index.FirstScreenVideo.AltImage}
            nameimage={selectTranslate().Pages.index.FirstScreenVideo.NameImage}
            urlvideo={selectTranslate().Pages.index.FirstScreenVideo.UrlVideo}
            titlevideo={
              selectTranslate().Pages.index.FirstScreenVideo.TitleVideo
            }
          />
        </div>
      </section>
      <section className={styles.main__h2component}>
        <div className={styles.main__h2component__container}>
          <H2Component
            // H2Title={selectTranslate().Pages.index.H2Compoonent.H2Title}
            H2Title={data.aboutstspdata.title}
            H2ComponentSubtitle={
              selectTranslate().Pages.index.H2Compoonent.H2SubTitle
            }
            H2ComponentUIBorder={h2componentbordertrue}
            H2ComponentUITheme={h2componentbgthemewhite}
          />
        </div>
      </section>
      <section className={styles.main__aboutcourseprogramm}>
        <div className={styles.main__aboutcourseprogramm__container}>
          <H2Component
            H2Title={selectTranslate().Pages.index.H2AboutCourseProgram.H2Title}
            H2ComponentSubtitle={
              selectTranslate().Pages.index.H2AboutCourseProgram.H2SubTitle
            }
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemewhite}
          />
          <div className={styles.main__aboutcourseprogramm__image}></div>
        </div>
      </section>
      <section className={styles.main__listmoduleofcourse}>
        <div className={styles.main__listmoduleofcourse__container}>
          <ListModuleOfCourse
            linktextstate={"greenishtransporent"}
            listmoduleofcourse={
              selectTranslate().CourseContent.ListModuleOfCourse
            }
          />
        </div>
      </section>
      <section className={styles.main__aboutportfolio}>
        <div className={styles.main__aboutportfolio__container}>
          <H2Component
            H2Title={selectTranslate().Portfolio.AboutPortfolioTitle}
            H2ComponentSubtitle={
              selectTranslate().Portfolio.AboutPortfolioSubTitle
            }
            H2ComponentUIBorder={h2componentborderfalse}
            H2ComponentUITheme={h2componentbgthemeblack}
          />
        </div>
        <div className={styles.main__aboutportfolio__borderbottom}></div>
        <div className={styles.main__thematicpointlist__container}>
          <ThematicPointList
            PointListTitle={
              selectTranslate().Portfolio.PortfolioIncludes
                .PortfolioIncludesTitle
            }
            ThematicPointlistItems={
              selectTranslate().Portfolio.PortfolioIncludes.PortfolioParts
            }
          />
          <div className={styles.main__thematicpointlist__linktext}>
            <LinkText
              linktextstate={"whitewhite"}
              linktexturl={
                selectTranslate().Portfolio.LinkTextAboutPortfolioUrl
              }
              linktextcontent={
                selectTranslate().Portfolio.LinkTextAboutPortfolio
              }
            />
          </div>
        </div>
        <div className={styles.main__aboutportfolio__patternbig}></div>
        <div className={styles.main__aboutportfolio__patternsmall}></div>
      </section>

      {/* Обязательные блоки-шаблоны для страниц*/}

      {selectTranslate().Pages.index.LandingMonoLinkData.length !== 0 ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                selectTranslate().Pages.index.LandingMonoLinkData
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {Object.keys(selectTranslate().Pages.index.FAQ).length !== 0 ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={selectTranslate().Pages.index.FAQ.Title}
              faqdata={selectTranslate().Pages.index.FAQ.QuestionAnswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {selectTranslate().Pages.index.FixLinks.length !== 0 ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={selectTranslate().Pages.index.FixLinks}
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
      {selectTranslate().Pages.index.FixLinks.length !== 0 ? (
        <FixLinks fixlinkdata={selectTranslate().Pages.index.FixLinks} />
      ) : null}
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const lang = locale;
  const res = await fetch(`http://localhost:5000/api/index_${lang}`);
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}
