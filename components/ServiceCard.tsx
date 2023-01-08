import styles from "../styles/Home.module.css";
import styles2 from "../styles/Index.module.css";
import {useState} from 'react'

const ServiceCard = ({ icon, title, project, description, skills,other }: any) => {
  //Fist state
  const [click, setClick] = useState(false);

  //state after
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.cardsContainer}>
       <label className={styles.label}>
            <input className={styles.input} type="checkbox"/>
      <div onClick={handleClick} className={styles.cardBody}>
     
        <div className={styles.front} style={{ paddingTop: 30 }}>
          <span style={{ fontSize: 70, color: "var(--yellow)" }}>{icon}</span>
          <div style={{ paddingTop: 70 }}>
            <h1
              className={styles2.textHeader1}
              style={{ fontWeight: 500, padding: 0 }}
            >
              {title}
            </h1>
            <h2 className={styles2.textHeader1} style={{ padding: 0 }}>
              {project}
            </h2>
          </div>
        </div>
        <div className={styles.back}>
          <h3 className={styles2.textHeader}>{title}</h3>
          <p
            className={styles2.textParagraph}
            style={{ width: "90%", margin: "auto", alignItems: "center" }}
          >
            {description}
          </p>
          <p
            className={styles2.textParagraph}
            style={{ width: "90%", margin: "auto", alignItems: "center"}}
          >
            <span style={{ fontWeight:500, }}>{other}</span> {skills}
          </p>
        </div>

      </div>
      </label>
    </div>
  );
};

export default ServiceCard;

//useState hooks code onclick on somthing it rotate to another ?
