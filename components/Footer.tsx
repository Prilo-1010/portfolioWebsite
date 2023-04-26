import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsTelephoneFill,
} from "react-icons/bs";
import { GrLinkedinOption, GrMail } from "react-icons/gr";
import styles from "../styles/Index.module.css";
import styles2 from "../styles/Components.module.css";
import styles3 from "../styles/Index.module.css";
import ContactCard from "./ContactCard";

const Footer = () => {
  return (
    <>
      <div className={styles2.contactContainer}>
        <div className={styles2.contactDetails}>
          <h3 className={styles3.textHeader}>Contacts</h3>
          <h1 className={styles3.textSubHeader}>Ways to Contact Me</h1>
        </div>
        <div className={styles2.contact}>
          <ContactCard
            link="mailto: loloprosper17@gmail.com"
            icon={<GrMail />}
            contact="johndoe@gmail.com"
          />
          <ContactCard
            link="tel: +27-69-229-7342"
            icon={<BsTelephoneFill />}
            contact="080 000 0000"
          />
          <ContactCard
            link="www.google.com"
            icon={<GrLinkedinOption />}
            contact="@johndoe"
          />
         
        </div>
      </div>
      <div className={styles.footer1}>
        <span className={styles.horizontal}></span>
      </div>
      <div className={styles.footer}>
        <h1 className={styles3.textParagraph}>© 2023 - Prosper Lolo </h1>
        <span className={styles.vertical2}></span>
        <h1 className={styles3.textParagraph}>All Rights Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
