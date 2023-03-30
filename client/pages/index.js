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
      title={data.indexpagedata.meta.title}
      keywords={data.indexpagedata.meta.keywords}
      description={data.indexpagedata.meta.description}
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
            h1title={data.indexpagedata.firstscreen.h1title}
            h1subtitle={data.indexpagedata.firstscreen.h1subtitle}
            altimage={data.indexpagedata.firstscreen.imagealt}
            nameimage={data.indexpagedata.firstscreen.imagename}
            urlvideo={data.indexpagedata.firstscreen.urlvideo}
            titlevideo={data.indexpagedata.firstscreen.titlevideo}
            videobuttontitle={data.indexpagedata.firstscreen.videobuttontitle}
            socialnetworkdata={data.socialnetworkdata}
          />
        </div>
      </section>
      <section className={styles.main__h2component}>
        <div className={styles.main__h2component__container}>
          <H2Component
            H2Title={data.aboutstspdata.title}
            H2ComponentSubtitle={data.aboutstspdata.subtitle}
            H2ComponentUIBorder={h2componentbordertrue}
            H2ComponentUITheme={h2componentbgthemewhite}
          />
        </div>
      </section>
      <section className={styles.main__aboutcourseprogramm}>
        <div className={styles.main__aboutcourseprogramm__container}>
          <H2Component
            H2Title={data.puapdata.aboutpuap.title}
            H2ComponentSubtitle={data.puapdata.aboutpuap.text}
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
            listmoduleofcourse={data.puapdata.modulespuap}
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
              data.portfoliodata.portfoliocomponents.portfoliocomponentstitie
            }
            ThematicPointlistItems={
              data.portfoliodata.portfoliocomponents.portfoliolist
            }
          />
          <div className={styles.main__thematicpointlist__linktext}>
            <LinkText
              linktextstate={"whitewhite"}
              linktexturl={data.portfoliodata.portfoliourl}
              linktextcontent={data.portfoliodata.portfoliotexturl}
            />
          </div>
        </div>
        <div className={styles.main__aboutportfolio__patternbig}></div>
        <div className={styles.main__aboutportfolio__patternsmall}></div>
      </section>

      {/* Обязательные блоки-шаблоны для страниц*/}

      {data.indexpagedata.landingmonolink.length !== 0 ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={data.indexpagedata.landingmonolink}
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {Object.keys(data.indexpagedata.faq).length !== 0 ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.indexpagedata.faq.faqtitle}
              faqdata={data.indexpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.indexpagedata.landingmultilink.length !== 0 ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={data.indexpagedata.landingmultilink}
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
        <FixLinks fixlinkdata={data.indexpagedata.landingmultilink} />
      ) : null}
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const lang = locale;
  // const res = await fetch(`http://localhost:5000/api/index_${lang}`);
  const res = await fetch(`http://studiumspatium.com:5000/api/index_${lang}`);
  const data = await res.json();
  return { props: { data } };
}
