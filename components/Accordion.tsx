import { useState } from "react";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Index.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Accordion = ({ title, paragraph }: any) => {
  //Fist state
  const [click, setClick] = useState(false);

  //state after
  const handleClick = () => setClick(!click);

  return (
    <>
      <div onClick={handleClick} className={styles.accordionItem}>
        <div
          className={
            click ? styles.accordionItemHeader1 : styles.accordionItemHeader
          }
        >
          <h1 style={{ paddingLeft: 10 }} className={styles2.textSubHeader}>
            {title}
          </h1>
          <div className={styles.sign} onClick={handleClick}>
            {click ? (
              <i>
                <IoMdArrowDropup />
              </i>
            ) : (
              <i>
                <IoMdArrowDropdown />
              </i>
            )}
          </div>
        </div>
        <div className={click ? "none" : styles.accordionItemBody}>
          <div className={styles.accordionItemBodyContent} style={{ fontWeight: 300 }}>{paragraph}</div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
