import styles from "./FormChildrenRequestPresentation.module.scss";

export default function FormChildrenRequestPresentation({
  inputformchildrenrequestpresentationdata,
  textareatrue,
  textareaplaceholder,
  buttonattachfiletrue,
  buttonattachfiletype,
  buttonattachfiletext,
  buttonattachfilename,
  buttonsendtype,
  buttonsendtext,
}) {
  const inputformchildrenrequestpresentationitems =
    inputformchildrenrequestpresentationdata.map(
      ({ id, fieldtype, placeholder }) => (
        <input
          key={id}
          type={fieldtype}
          placeholder={placeholder}
          className={styles.FormChildrenRequestPresentation__input}
        />
      )
    );

  return (
    <form action="" className={styles.FormChildrenRequestPresentation}>
      {inputformchildrenrequestpresentationitems}
      {textareatrue ? (
        <textarea
          placeholder={textareaplaceholder}
          className={styles.FormChildrenRequestPresentation__textarea}
        />
      ) : null}

      {buttonattachfiletrue ? (
        <div className={styles.FormChildrenRequestPresentation__attachfile}>
          <button
            type={buttonattachfiletype}
            className={styles.FormChildrenRequestPresentation__attachfilebutton}
          >
            {buttonattachfiletext}
          </button>
          <p className={styles.FormChildrenRequestPresentation__attachfilename}>
            {buttonattachfilename}
          </p>
        </div>
      ) : null}
      <button
        type={buttonsendtype}
        className={styles.FormChildrenRequestPresentation__sendbutton}
      >
        {buttonsendtext}
      </button>
    </form>
  );
}
