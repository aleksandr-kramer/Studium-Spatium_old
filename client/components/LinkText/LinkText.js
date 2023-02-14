import styles from "./LinkText.module.scss";
import Link from "next/link";

import {
  linktextcontentgreenish,
  linktextcontentwhite,
  linktextbuttonbordertransporentgreenish,
  linktextbuttonbordergreenishgreenish,
  linktextbuttonbordertransporentwhite,
  linktextbuttonborderwhitewhite,
  linktextimagevectorgreenish,
  linktextimagevectorwhite,
  linktextimagevectorblack,
} from "../../constants/stylesconstants";

export default function LinkText({
  linktexturl,
  linktextstate,
  linktextcontent,
  uilinktextcontentcolor,
  uilinktextbuttonbordercolor,
  uilinktextimagecolor,
}) {
  if (linktextstate === "greenishtransporent") {
    uilinktextcontentcolor = linktextcontentgreenish;
    uilinktextbuttonbordercolor = linktextbuttonbordertransporentgreenish;
    uilinktextimagecolor = linktextimagevectorgreenish;
  } else if (linktextstate === "greenishgreenish") {
    uilinktextcontentcolor = linktextcontentgreenish;
    uilinktextbuttonbordercolor = linktextbuttonbordergreenishgreenish;
    uilinktextimagecolor = linktextimagevectorwhite;
  } else if (linktextstate === "whitetransporent") {
    uilinktextcontentcolor = linktextcontentwhite;
    uilinktextbuttonbordercolor = linktextbuttonbordertransporentwhite;
    uilinktextimagecolor = linktextimagevectorwhite;
  } else if (linktextstate === "whitewhite") {
    uilinktextcontentcolor = linktextcontentwhite;
    uilinktextbuttonbordercolor = linktextbuttonborderwhitewhite;
    uilinktextimagecolor = linktextimagevectorblack;
  }

  return (
    <Link href={linktexturl} className={styles.LinkText}>
      <span
        className={`${styles.LinkText__content} ${
          styles[`LinkText__content${uilinktextcontentcolor}`]
        }`}
      >
        {linktextcontent}
      </span>
      <div
        className={`${styles.LinkText__button} ${
          styles[`LinkText__button${uilinktextbuttonbordercolor}`]
        }`}
      >
        <div
          className={`${styles.LinkText__image} ${
            styles[`LinkText__image${uilinktextimagecolor}`]
          }`}
        ></div>
      </div>
    </Link>
  );
}
