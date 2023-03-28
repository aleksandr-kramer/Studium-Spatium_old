import styles from "./ParagraphList.module.scss";
import {
  paragraphlistfontcolorbaseleft,
  paragraphlistfontcolorbasecenter,
  paragraphlistfontcolorwhiteleft,
  paragraphlistfontcolorwhitecenter,
} from "../../constants/stylesconstants";

export default function ParagraphList({
  ParagraphItems,
  paragraphliststate,
  uiparagraphliststyle,
}) {
  if (paragraphliststate === "fontcolorbaseleft") {
    uiparagraphliststyle = paragraphlistfontcolorbaseleft;
  } else if (paragraphliststate === "fontcolorbasecenter") {
    uiparagraphliststyle = paragraphlistfontcolorbasecenter;
  } else if (paragraphliststate === "fontcolorwhiteleft") {
    uiparagraphliststyle = paragraphlistfontcolorwhiteleft;
  } else if (paragraphliststate === "fontcolorwhitecenter") {
    uiparagraphliststyle = paragraphlistfontcolorwhitecenter;
  }

  const paragraphitems = ParagraphItems.map(({ id, paragraph }) => (
    <li key={id} className={styles.ParagraphList__paragraphitem}>
      <p
        className={`${styles.ParagraphList__paragraphtext} ${
          styles[`ParagraphList__paragraphtext${uiparagraphliststyle}`]
        }`}
      >
        {paragraph}
      </p>
    </li>
  ));
  return <ul className={styles.ParagraphList}>{paragraphitems}</ul>;
}
