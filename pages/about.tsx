import Head from "next/head";
import { Button } from "../components/Button";
import Skills from "../components/Skills";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Index.module.css";
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";

const about = () => {
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
        <div className={styles.aboutContainer} >
          <div className={styles.aboutPage}>
            <h3 className={styles2.textHeader}>ABOUT</h3>
            <h1 className={styles2.textSubHeader}>What I Am Great At</h1>
          </div>
          <div className={styles.aboutSection}>
            <div
              className={styles.aboutInfo}
            >
              <h2 className={styles2.textSubHeader1}>Software Developer</h2>
              <p className={styles2.textParagraph}>
                Im a Full-Stack Developer situated in South Africa. uve forever
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
            <div
              className={styles.aboutPersonal}
            >
              <h2 className={styles2.textSubHeader1}>Personal Information</h2>
              <h3 className={styles2.textParagraph}>
                <span style={{ fontWeight: 500 }}>Name</span> : Prosper Lolo
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Age
                </span>{" "}
                : 21 years
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
                : loloprosper17@gmail.com
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Phone
                </span>{" "}
                : (+27) 692 297 342
              </h3>
              <h3 className={styles2.textParagraph}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Freelance
                </span>{" "}
                : Available
              </h3>
              <div style={{ paddingTop: 15 }}>
                <Button link="about">Download Resume</Button>
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
              <Skills text="CSS" skill={styles.css} percent="82%" />
              <Skills
                text="Javascript"
                skill={styles.javascript}
                percent="77%"
              />
              <Skills text="React Js" skill={styles.react} percent="70%" />
              <Skills text="Angular" skill={styles.angular} percent="60%" />
              <Skills
                text="Node-Express Js"
                skill={styles.node}
                percent="65%"
              />
              <Skills
                text="Adobe Illustrator"
                skill={styles.illus}
                percent="55%"
              />
              <Skills text="Adobe XD" skill={styles.xd} percent="75%" />
              <Skills text="HTML" skill={styles.html} percent="90%" />
              <Skills text="CSS" skill={styles.css} percent="82%" />
              <Skills
                text="Javascript"
                skill={styles.javascript}
                percent="77%"
              />
              <Skills text="React Js" skill={styles.react} percent="70%" />
            </div>
          </div>
        </div>
        <div className={styles.accordionContainer}>
          <div className={styles2.otherPage}>
            <h3 className={styles2.textHeader}>Accordion</h3>
            <h1 className={styles2.textSubHeader}>What I Am Great At</h1>
          </div>
          <div className={styles.accordion}>
            <Accordion
              title="Web Development"
              paragraph="Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks."
            />
            <Accordion
              title="Web Design"
              paragraph="Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks."
            />
            <Accordion
              title="Hosting"
              paragraph="Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default about;
