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
            <h1 className={styles2.textSubHeader}>What I Am Great At</h1>
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
            project="8 projects completed"
            description="I value simple content structure, clean design patterns, and thoughtful interactions."
            other="Design Tools: "
            skills="Adobe XD, Adobe Express, Sketch, Pen and paper."
          />
          <ServiceCard
            icon={<FaReact />}
            title="Web Development"
            project="6 projects completed"
            description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            other="Development Tools:"
            skills="Adobe XD, Adobe Express, Sketch, Pen and paper."
          />
          <ServiceCard
            icon={<CiMobile3 />}
            title="App Development"
            project="3 projects completed"
            description="I like to code things from scratch, and enjoy bringing ideas to life in the browser.."
            other="Development Tools:"
            skills="Adobe XD, Adobe Express, Sketch, Pen and paper."
          />
          <ServiceCard
            icon={<GiPencilBrush />}
            title="Graphic Design"
            project="5 projects completed"
            description="I identify and produce visual concepts to communicate ideas that inspire, inform and captivate consumers."
            other="Design Tools: "
            skills="Adobe Illustrator, Canva."
          />
        </div>

        <div className={styles.statMainPage}>
          <div className={styles.statPage}>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>8+</h1>
              <h2 className={styles2.textHeader}>Clients</h2>
              <p className={styles2.textParagraph}>
                Number of customers who are satisfied with a completed project.
              </p>
            </div>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>4.3mil</h1>
              <h2 className={styles2.textHeader}>Views</h2>
              <p className={styles2.textParagraph}>
                Number of views our works have achieved in recent years.
              </p>
            </div>
            <div className={styles.stat}>
              <h1 className={styles2.textSubHeader}>4.9/5.0</h1>
              <h2 className={styles2.textHeader}>Rating</h2>
              <p className={styles2.textParagraph}>
                The rating our customers give us, according to Google Reviews.
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
