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
            link="about"
            icon={<GrMail />}
            contact="loloprosper17@gmail.com"
          />
          <ContactCard
            link="about"
            icon={<BsTelephoneFill />}
            contact="+27 692 229 7342"
          />
          <ContactCard
            link="about"
            icon={<GrLinkedinOption />}
            contact="@prosperlolo"
          />
          <ContactCard
            link="about"
            icon={<BsInstagram />}
            contact="@lolo_prilo"
          />
          <ContactCard
            link="about"
            icon={<BsTwitter />}
            contact="@ProsperLolo"
          />
          <ContactCard link="about" icon={<BsGithub />} contact="Prilo-1010" />
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
