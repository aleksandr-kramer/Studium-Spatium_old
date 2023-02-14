import styles from "./DescriptionNode.module.scss";

export default function DescriptionNode({ descriptionnodelist }) {
  const descriptionnodeitems = descriptionnodelist.map(
    ({ id, NodeTitle, NodeText }) => (
      <li key={id} className={styles.DescriptionNode__nodeitem}>
        <p className={styles.DescriptionNode__nodeitemdescription}>
          <span className={styles.DescriptionNode__nodeitemtitle}>
            {NodeTitle}
          </span>{" "}
          {NodeText}
        </p>
      </li>
    )
  );
  return <ul className={styles.DescriptionNode}>{descriptionnodeitems}</ul>;
}
