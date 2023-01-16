/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Home.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { Button } from "../Button";
import AnimatedText from "../AnimatedText";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const Main = ({ scroll }: any) => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.home1}>
          <h1
            style={{
              fontSize: 50,
              fontWeight: 400,
              margin: 0,
              display: "flex",
              paddingBottom: 5
            }}
            className={styles.center}
          >
            <AnimatedText text="Prosper Lolo" />
            <span className={styles.text1} style={{ color: "var(--yellow)" }}>
              <AnimatedText text=" ." />
            </span>
          </h1>

          <div 
            style={{
              fontSize: 26,
              margin: 0,
              lineHeight: 2,
              fontWeight: 300,
              display: "block",
            }}
          >
            <div style={{ display: "flex" }} className={styles.center}>
              <span
                className={styles.text1} 
                style={{ color: "var(--yellow)", margin: 0, marginRight: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>
              <AnimatedText text="UI/UX Designer" />
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginLeft: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>{" "}
            </div>

            <div style={{ display: "flex" }} className={styles.center}>
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginRight: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>
              <AnimatedText text="App Developer" />
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginLeft: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>{" "}
            </div>

            <div style={{ display: "flex" }} className={styles.center}>
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginRight: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>
              <AnimatedText text="Web Developer" />
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginLeft: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>{" "}
            </div>

            <div style={{ display: "flex" }} className={styles.center}>
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginRight: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>
              <AnimatedText text="Graphic Designer" />
              <span
                className={styles.text1}
                style={{ color: "var(--yellow)", margin: 0, marginLeft: 10 }}
              >
                {" "}
                <AnimatedText text="|" />
              </span>{" "}
            </div>
          </div>

          <div className={styles.center} style={{ display: "flex", paddingTop: 14 }}>
            <Link
              className={styles.socialLinks}
              href="https://www.instagram.com/lolo_prilo"
            >
              <h3
                className={styles.text}
                style={{
                  fontSize: 20,
                  margin: 1,
                  paddingRight: 8,
                  fontWeight: 300,
                }}
              >
                <AnimatedText text="Instagram" />
              </h3>
            </Link>
            <h3
              className={styles.text1}
              style={{ fontSize: 20, margin: 1, color: "var(--yellow)" }}
            >
              |
            </h3>
            <Link
              className={styles.socialLinks}
              href="https://www.linkedin.com/in/prosperlolo"
            >
              <h3
                className={styles.text}
                style={{
                  fontSize: 20,
                  margin: 1,
                  paddingLeft: 8,
                  fontWeight: 300,
                }}
              >
                <AnimatedText text="LinkedIn" />
              </h3>
            </Link>
          </div>

          <div className={styles.center} style={{ display: "flex", paddingTop: 12, paddingBottom: 20 }}>
            <Link
              className={styles.socialLinks}
              href="https://github.com/Prilo-1010"
            >
              <h3
                className={styles.text}
                style={{
                  fontSize: 20,
                  margin: 1,
                  paddingRight: 8,
                  fontWeight: 300,
                }}
              >
                <AnimatedText text="Github" />
              </h3>
            </Link>
            <h3
              className={styles.text1}
              style={{ fontSize: 20, margin: 1, color: "var(--yellow)" }}
            >
              |
            </h3>
            <Link
              className={styles.socialLinks}
              href="https://www.twitter.com/ProsperLolo"
            >
              <h3
                className={styles.text}
                style={{
                  fontSize: 20,
                  margin: 1,
                  paddingLeft: 8,
                  fontWeight: 300,
                }}
              >
                <AnimatedText text="Twitter" />
              </h3>
            </Link>
          </div>

          <Link href="#service" onClick={scroll} >
            <h3
              className={styles.bounce}
              style={{
                fontSize: 100,
                color: "var(--yellow)",
                alignItems: "center",
                padding: 0,
              }}
            >
              <IoMdArrowDropdown />
            </h3>
          </Link>
        </div>

        <motion.div className={styles.home2} initial={{x: "100%" }} animate={{x: "0%"}} transition={{duration:1, ease: "easeIn"}}>
          <div className={styles.videoCon}>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={10000}
              showStatus={false}
              showThumbs={false} 
         
            >
              <div className={styles.videoCon}>
                <div className={styles.videoOverlay}> </div>
                <video autoPlay className={styles.video} muted loop>
                  <source src="./video2.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoText}>
                  <div style={{ paddingTop: 15 }}>
                    <Button link="work"> View More Work</Button>
                  </div>
                </div>
              </div>

              <div className={styles.videoCon}>
                <div className={styles.videoOverlay}> </div>
                <video autoPlay className={styles.video} muted loop>
                  <source src="./video.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoText}>
                  <div style={{ paddingTop: 15 }}>
                    <Button link="work"> View More Work</Button>
                  </div>
                </div>
              </div>
              <div className={styles.videoCon}>
                <div className={styles.videoOverlay}> </div>
                <video autoPlay className={styles.video} muted loop>
                  <source src="./video3.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoText}>
                  <div style={{ paddingTop: 15 }}>
                    <Button link="work"> View More Work</Button>
                  </div>
                </div>
              </div>
              <div className={styles.videoCon}>
                <div className={styles.videoOverlay}> </div>
                <video autoPlay className={styles.video} muted loop>
                  <source src="./video4.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoText}>
                  <div style={{ paddingTop: 15 }}>
                    <Button link="work"> View More Work</Button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Main;
