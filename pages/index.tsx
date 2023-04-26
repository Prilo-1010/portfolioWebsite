import Head from "next/head";
import Main from "../components/home/Main";
import Service from "../components/home/Servcies";
import { useRef } from "react";
import { ScrollContainer, Animator } from "react-scroll-motion";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import { motion } from "framer-motion";
import { batch, Fade, Move } from "react-scroll-motion/dist/animations";

export default function Home() {
  const service = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration:1, ease: "easeIn"}}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Move(0, -100))}>
              <Main scroll={() => scrollToSection(service)} />
            </Animator>
          </ScrollPage>
        </ScrollContainer>

        <Service id="s" refer={service} />
      </motion.div>
    </>
  );
}
