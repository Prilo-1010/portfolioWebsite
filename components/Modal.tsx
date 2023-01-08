import styles from "../styles/Work.module.css";

const Modal = ({ children }: any) => {
  return (
    <>
      <div className={styles.dialog}>
        <div className={styles.dialogOverlay}></div>
        <div className={styles.dialogProp}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
