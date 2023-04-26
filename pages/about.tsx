import Head from "next/head";
import { Button } from "../components/Button";
import Skills from "../components/Skills";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Index.module.css";
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "../components/Modal";
import Image from "next/image";

const About = () => {
  const [click, setClick] = useState(false);

  const handleClick = (e: boolean) => setClick(e);
  return (
    <>
      <Head>
        <title>Prosper | About</title>
        <meta name="keywords" content="people" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <div className={styles.aboutContainer}>
          <div className={styles.aboutPage}>
            <h3 className={styles2.textHeader}>ABOUT</h3>
            <h1 className={styles2.textSubHeader}>Who am I?</h1>
          </div>
          <div className={styles.aboutSection}>
            <div className={styles.aboutInfo}>
              <h2 className={styles2.textSubHeader1}>Software Developer</h2>
              <p className={styles2.textParagraph}>
                I have forever
                been somebody who has both an innovative and a consistent side.
                At the point when I found website composition , I understood it
                would be the ideal fit. I could utilize my inventive side to
                plan and my consistent side to code. As a little something
                extra, being both originator and designer permits me to ensure
                no detail is lost in interpretation. Efficient individual, issue
                solver, autonomous worker with high scrupulousness and love to
                chipping away at aggressive activities with positive
                individuals.
              </p>
            </div>
            <div className={styles.aboutPersonal}>
              <h2 className={styles2.textSubHeader1}>Personal Information</h2>
              <h3 className={styles2.textParagraph}>
                <span style={{ fontWeight: 500 }}>Name</span> : John Doe
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Age
                </span>{" "}
                : 25 years
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Residence
                </span>{" "}
                : Johannesburg, South Africa
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Email
                </span>{" "}
                : johndoe@gmail.com
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Phone
                </span>{" "}
                : 080 000 0000
              </h3>

              {click && (
                <Modal>
                  <Image
                    onClick={() => handleClick(false)}
                    src="/images/pic.jpg"
                    width={400}
                    height={400}
                    alt="logo"
                    style={{ cursor: "pointer" }}
                  />
                </Modal>
              )}

              <h3
                onClick={() => handleClick(true)}
                style={{
                  color: "var(--yellow)",
                  fontWeight: 700,
                  fontSize: 20,
                  textDecoration: "underline",
                  cursor: "pointer"
                }}
              >
               View Picture
              </h3>

              <div style={{ paddingTop: 15 }}>
                <Button link="#" download="resume.pdf" rel="noopener noreferrer" target="_blank">
              
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.aboutPage}>
              <h3 className={styles2.textHeader}>SKILLS</h3>
              <h1 className={styles2.textSubHeader}>What I Am Great At</h1>
            </div>

            <div className={styles.skillSet}>
              <Skills text="HTML" skill={styles.html} percent="90%" />
              <Skills text="CSS/SCSS" skill={styles.css} percent="88%" />
              <Skills
                text="Javascript"
                skill={styles.javascript}
                percent="80%"
              />
              <Skills
                text="Typescript"
                skill={styles.express}
                percent="75%"
              />
              <Skills text="ReactJs" skill={styles.react} percent="80%" />
              <Skills text="NextJs" skill={styles.next} percent="75%" />
              <Skills text="React-Native" skill={styles.native} percent="70%" />
              <Skills text="Angular" skill={styles.mongo} percent="65%" />

              <Skills text="ExpressJs" skill={styles.express} percent="75%" />
              <Skills text=".NET" skill={styles.net} percent="70%" />
              <Skills text="Firebase" skill={styles.firebase} percent="70%" />

              <Skills text="Figma" skill={styles.figma} percent="80%" />
              <Skills
                text="Adobe Illustrator"
                skill={styles.illus}
                percent="65%"
              />
              <Skills
                text="Adobe Photoshop"
                skill={styles.photo}
                percent="60%"
              />

              <Skills text="SQL/NoSQL" skill={styles.sql} percent="70%" />
              
            </div>
          </div>
        </div>
        <div className={styles.accordionContainer}>
          <div className={styles2.otherPage}>
            <h3 className={styles2.textHeader}>MORE</h3>
            <h1 className={styles2.textSubHeader}>What I DO</h1>
          </div>
          <div className={styles.accordion}>
            <Accordion
              title="UI/UX Design"
              paragraph="UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps. They'll then use their creativity while applying color palettes based on what best fits into a particular design conceptually. They helps create products with a good user experience. They are responsible for understanding what users want from their device and then designing it so they can find all of its features easily without any hassle. They also make sure everything works properly when combined in one package"
            />
            <Accordion
              title="Web Development"
              paragraph="Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks."
            />
            <Accordion
              title="App Development"
              paragraph="The App Developer is then responsible for the technical feasibility and how to comply with the guidelines of the app store operators. A developer basically implements the wishes of customers’ mobile applications. They consult with function designers, UX designers, UI designers, and other programmers. In addition, mobile developers ensure that the functional and technical side of the application works properly. 

              They also check whether the front end and back end of the app are correctly linked. Another task is to further develop concepts of existing apps. But it doesn’t end here. It is also part of the job profile to create a detailed time and cost estimate for a potential project. "
            />
            <Accordion
              title="Graphic Design"
              paragraph="Graphic designers create visual communications such as adverts, branding, publicity materials and magazine layouts. Graphic designers (who may also be known as graphic artists) utilise graphic design skills to create media products such as magazines, labels, advertising and signage."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
