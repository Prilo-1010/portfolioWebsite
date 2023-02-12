/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/Home.module.css";
import styles2 from "../../styles/Index.module.css";
import ServiceCard from "../ServiceCard";
import { SiFigma } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";
import { GiPencilBrush } from "react-icons/gi";
import { FaReact} from "react-icons/fa";
import { Button } from "../Button";

const Service = ({ id, refer }: any) => {
  return (
    <>
      <div ref={refer} id={id} className={styles.serviceContainer}>
        <div className={styles.servicePage}>
          <div>
            <h3 className={styles2.textHeader}>SERVICES</h3>
            <h1 className={styles2.textSubHeader}>What I Provide</h1>
            <p className={styles2.textParagraph}>
              I specialize in building various design domains and websites for
              individuals and small businesses. No need to settle for cheap
              solutions Generic template. We offer custom designs at reasonable
              prices. Your website is often your customer's first impression Get
              it, so make sure it's a good one.
            </p>
          </div>
        </div>

        <div className={styles.serviceCards}>
          <ServiceCard
            icon={<SiFigma />}
            title="UI/UX Design"
            project="6 projects completed"
            description="I value simple content structure, clean design patterns, and thoughtful interactions."
            other="Design Tools:"
            skills="Figma, Adobe AE, Pen and paper."
          />
          <ServiceCard
            icon={<FaReact />}
            title="Web Development"
            project="4 projects completed"
            description="I like to code things from scratch,  in both Frontend and Backend"
            other="Development Tools:"
            skills="Visual Studio, Visual Studio Code, Github "
          />
          <ServiceCard
            icon={<CiMobile3 />}
            title="App Development"
            project="2 projects completed"
            description="I create software programs for wireless devices such as smartphones, tablets and wearables."
            other="Development Tools:"
            skills="VS Code, Expo, Android Studio, Firebase"
          />
          <ServiceCard
            icon={<GiPencilBrush />}
            title="Graphic Design"
            project="5 projects completed"
            description="I identify and produce visual concepts to communicate ideas that inspire, inform and captivate consumers."
            other="Design Tools:"
            skills="Adobe Illustrator, Adobe Photoshop, Figma"
          />
        </div>

        <div className={styles.statMainPage}>
          <div className={styles.statPage}>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>3+</h1>
              <h2 className={styles2.textHeader}>Clients</h2>
              <p className={styles2.textParagraph}>
                Number of customers who are satisfied with a completed project.
              </p>
            </div>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>15+</h1>
              <h2 className={styles2.textHeader}>Projects</h2>
              <p className={styles2.textParagraph}>
                Number of projects completed recent years.
              </p>
            </div>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>4.9/5.0</h1>
              <h2 className={styles2.textHeader}>Rating</h2>
              <p className={styles2.textParagraph}>
                The rating our customers give us, according to Reviews.
              </p>
            </div>
          </div>
          <div style={{ paddingTop: 50 }}>
            <Button link="work">View Projects</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
