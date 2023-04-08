import DescriptionNode from "../DescriptionNode/DescriptionNode";
import LinkText from "../LinkText/LinkText";
import styles from "./DescriptionOfNodes.module.scss";

export default function DescriptionOfNodes({
  linktextstate,
  descriptionofnodestitle,
  descriptionofnodesdata,
}) {
  const descriptionofnodesitems = descriptionofnodesdata.map(
    ({ id, namemodule, textlink, urllink, generalaboutmodule }) => (
      <li key={id} className={styles.DescriptionOfNodes__item}>
        <div className={styles.DescriptionOfNodes__namenode}>
          <span className={styles.DescriptionOfNodes__numbernode}>{id}</span>
          <p className={styles.DescriptionOfNodes__titlenode}>{namemodule}</p>
        </div>

        <div className={styles.DescriptionOfNodes__linktext}>
          <LinkText
            linktexturl={urllink}
            linktextstate={linktextstate}
            linktextcontent={textlink}
          />
        </div>
        <DescriptionNode descriptionnodelist={generalaboutmodule} />
      </li>
    )
  );

  return (
    <div className={styles.DescriptionOfNodes}>
      <h2 className={styles.DescriptionOfNodes__title}>
        {descriptionofnodestitle}
      </h2>
      <ul className={styles.DescriptionOfNodes__items}>
        {descriptionofnodesitems}
      </ul>
    </div>
  );
}
