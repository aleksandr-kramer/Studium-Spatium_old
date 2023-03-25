import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";
import styles from "./MainLayout.module.scss";

export default function MainLayout({
  children,
  title,
  description,
  keywords,
  ImgLogoFooter,
  ImgLogoHeaderTop,
  AltLogoHeaderTop,
  ImgLogoHeaderBottom,
  AltLogoHeaderBottom,
  AltLogoFooter,
  socialnetworkdata,
  menulinksdomain,
  menulinkssubdomain,
  textbeforespan,
  textspan,
  textafterspan,
  titlecontact,
  contactemail,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="Keywords" content={keywords} />
      </Head>
      <Header
        ImgLogoHeaderTop={ImgLogoHeaderTop}
        AltLogoHeaderTop={AltLogoHeaderTop}
        ImgLogoHeaderBottom={ImgLogoHeaderBottom}
        AltLogoHeaderBottom={AltLogoHeaderBottom}
        menulinksdomain={menulinksdomain}
        menulinkssubdomain={menulinkssubdomain}
      />
      <main className={styles.Main}>{children}</main>
      <Footer
        ImgLogoFooter={ImgLogoFooter}
        AltLogoFooter={AltLogoFooter}
        socialnetworkdata={socialnetworkdata}
        menulinksdomain={menulinksdomain}
        textbeforespan={textbeforespan}
        textspan={textspan}
        textafterspan={textafterspan}
        titlecontact={titlecontact}
        contactemail={contactemail}
      />
    </>
  );
}
