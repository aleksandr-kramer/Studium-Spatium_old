// Стандартные для всех страниц импорты. Меняем при необходимости путь до файла
// ------------------------------------------
import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/pages/Request.module.scss";
import FirstScreenImage from "../../components/FirstScreenImage/FirstScreenImage";
import FirstScreenVideo from "../../components/FirstScreenVideo/FirstScreenVideo";
import FixLinks from "../../components/FixLinks/FixLinks";
import LandingMultiLink from "../../components/LandingMultiLink/LandingMultiLink";
import LandingMonoLink from "../../components/LandingMonoLink/LandingMonoLink";
import Faq from "../../components/Faq/Faq";
// ------------------------------------------
// Импорты для конкретных страниц
// ------------------------------------------
import FeedbackComponent from "../../components/feedback/FeedbackComponent";
import axios from "axios";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";
// ------------------------------------------

// Импорт переменных для стилей блоков. Добавляются/Удаляются при необходимости
// ------------------------------------------
import { landingmonolinkbgcolorsmoky } from "../../constants/stylesconstants";
// ------------------------------------------

export default function Requestaconsultation({ data }) {
  const [yourname, setYourname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messagetext, setMessagetext] = useState("");
  const [backenderrors, setBackenderrors] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef(null);

  const router = useRouter();

  const sendRequest = async () => {
    try {
      const data = new FormData();
      data.append("yourname", yourname);
      data.append("email", email);
      data.append("phone", phone);
      data.append("messagetext", messagetext);
      data.append("work", selectedFile);
      await axios
        .post(`${process.env.NEXT_PUBLIC_AXIOS_URL}requestaconsultation`, data)
        .then(() => router.push("/thanks"));
    } catch (error) {
      console.log(error);
      setBackenderrors(error.response.data);
    }
  };

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
      title={data.requestaconsultationpagedata.meta.title}
      keywords={data.requestaconsultationpagedata.meta.keywords}
      description={data.requestaconsultationpagedata.meta.description}
    >
      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Начало */}

      {data.requestaconsultationpagedata.firstscreen.firstscreentype ===
      "video" ? (
        <section className={styles.main__firstscreenvideo}>
          <div className={styles.main__firstscreenvideo__container}>
            <FirstScreenVideo
              h1title={data.requestaconsultationpagedata.firstscreen.h1title}
              h1subtitle={
                data.requestaconsultationpagedata.firstscreen.h1subtitle
              }
              altimage={data.requestaconsultationpagedata.firstscreen.imagealt}
              nameimage={
                data.requestaconsultationpagedata.firstscreen.imagename
              }
              urlvideo={data.requestaconsultationpagedata.firstscreen.urlvideo}
              titlevideo={
                data.requestaconsultationpagedata.firstscreen.titlevideo
              }
              videobuttontitle={
                data.requestaconsultationpagedata.firstscreen.videobuttontitle
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : data.requestaconsultationpagedata.firstscreen.firstscreentype ===
        "image" ? (
        <section className={styles.main__firstscreenimage}>
          <div className={styles.main__firstscreenimage__container}>
            <FirstScreenImage
              h1title={data.requestaconsultationpagedata.firstscreen.h1title}
              h1subtitle={
                data.requestaconsultationpagedata.firstscreen.h1subtitle
              }
              altimage={data.requestaconsultationpagedata.firstscreen.imagealt}
              nameimage={
                data.requestaconsultationpagedata.firstscreen.imagename
              }
              socialnetworkdata={data.socialnetworkdata}
            />
          </div>
        </section>
      ) : null}

      {/* Блок первого экрана для каждой страницы (выбор из трёх вариантов)*/}
      {/* Конец */}

      {/* ------------ блоки для конкретной страницы (начало) ------------ */}

      <section className={styles.main__coursepresentation}>
        <div className={styles.main__coursepresentation__container}>
          <FeedbackComponent
            title={data.consultationdata.requestconsultation.title}
            feedbackcomponenttextdata={
              data.consultationdata.requestconsultation.text
            }
            feedbackcomponentabouticondata={
              data.consultationdata.requestconsultation.abouticonspoint
            }
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              name="requestform"
              className={styles.main__formrequest}
            >
              {backenderrors.length !== 0 ? (
                <ul className={styles.main__formrequest__erroritems}>
                  {backenderrors.map((e) => (
                    <li
                      className={styles.main__formrequest__erroritem}
                      key={e.path}
                    >
                      {e.msg}
                    </li>
                  ))}
                </ul>
              ) : null}
              <input
                onChange={(e) => setYourname(e.target.value)}
                name="yourname"
                type={
                  data.consultationdata.requestconsultation.form.input[0]
                    .fieldtype
                }
                placeholder={
                  data.consultationdata.requestconsultation.form.input[0]
                    .placeholder
                }
                className={styles.main__formrequest__input}
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type={
                  data.consultationdata.requestconsultation.form.input[1]
                    .fieldtype
                }
                placeholder={
                  data.consultationdata.requestconsultation.form.input[1]
                    .placeholder
                }
                className={styles.main__formrequest__input}
              />

              <input
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                type={
                  data.consultationdata.requestconsultation.form.input[2]
                    .fieldtype
                }
                placeholder={
                  data.consultationdata.requestconsultation.form.input[2]
                    .placeholder
                }
                className={styles.main__formrequest__input}
              />

              <textarea
                onChange={(e) => setMessagetext(e.target.value)}
                name="messagetext"
                placeholder={
                  data.consultationdata.requestconsultation.form.textarea
                    .placeholder
                }
                className={styles.main__formrequest__textarea}
              />

              <div className={styles.main__formrequest__attachfile}>
                <input
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  name="selectfile"
                  type="file"
                  ref={filePicker}
                  accept=".pdf, .doc*, .zip, .rar, .7z, .gz"
                  className={styles.main__formrequest__selectfile_hidden}
                />

                <button
                  onClick={() => filePicker.current.click()}
                  type={
                    data.consultationdata.requestconsultation.form
                      .buttonattachfile.fieldtype
                  }
                  className={styles.main__formrequest__attachfilebutton}
                >
                  {
                    data.consultationdata.requestconsultation.form
                      .buttonattachfile.buttontext
                  }
                </button>
                <p className={styles.main__formrequest__attachfilename}>
                  {selectedFile
                    ? selectedFile.name
                    : data.consultationdata.requestconsultation.form
                        .buttonattachfile.filenametext}
                </p>
              </div>

              <button
                onClick={sendRequest}
                name="requestbutton"
                type={
                  data.consultationdata.requestconsultation.form.buttonsend.type
                }
                className={styles.main__formrequest__sendbutton}
              >
                {
                  data.consultationdata.requestconsultation.form.buttonsend
                    .buttontext
                }
              </button>
            </form>
          </FeedbackComponent>
        </div>
      </section>

      {/* ------------ блоки для конкретной страницы (конец) ------------ */}

      {/* ------------ Обязательные блоки-шаблоны для страниц (начало) ------------ */}

      {data.requestaconsultationpagedata.islandingmonolink ? (
        <section className={styles.main__landingmonolink}>
          <div className={styles.main__landingmonolink__container}>
            <LandingMonoLink
              landingmonolinkdata={
                data.requestaconsultationpagedata.landingmonolink
              }
              uilandingmonolinkbgcolor={landingmonolinkbgcolorsmoky}
            />
          </div>
        </section>
      ) : null}

      {data.requestaconsultationpagedata.isfaq ? (
        <section className={styles.main__faq}>
          <div className={styles.main__faq__container}>
            <Faq
              title={data.requestaconsultationpagedata.faq.faqtitle}
              faqdata={data.requestaconsultationpagedata.faq.questionanswer}
            />
          </div>
          <div className={styles.main__faq__patternbig}></div>
          <div className={styles.main__faq__patternsmall}></div>
        </section>
      ) : null}

      {data.requestaconsultationpagedata.islandingmultilink ? (
        <section className={styles.main__landingmultilink}>
          <div className={styles.main__landingmultilink__container}>
            <LandingMultiLink
              listlandingmultilink={
                data.requestaconsultationpagedata.landingmultilink
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

      {data.requestaconsultationpagedata.islandingmultilink ? (
        <FixLinks
          fixlinkdata={data.requestaconsultationpagedata.landingmultilink}
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
    `${process.env.FETCH_URL}:5000/api/requestaconsultation_${lang}`
  );
  const data = await res.json();
  return { props: { data } };
}
