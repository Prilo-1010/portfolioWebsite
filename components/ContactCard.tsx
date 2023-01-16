import Link from "next/link";
import styles from "../styles/Components.module.css";
import styles2 from "../styles/Index.module.css";

const ContactCard = ({ contact, icon, link }: any) => {
  return (
    <>
      <Link  href={`${link}`}>
        <div className={styles.contactCard}>
           <div style={{paddingRight: 5, marginTop:5}} className={styles2.textParagraph}>{icon}</div> 
           <h1  style={{paddingRight: 5, marginTop:10}} className={styles2.textParagraph}>{contact}</h1>
        </div>
      </Link>
    </>
  );
};

export default ContactCard;
