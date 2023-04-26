/* eslint-disable react/no-unescaped-entities */
//* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Work.module.css";
import styles2 from "../styles/Index.module.css";
import { createClient } from "next-sanity";
import { motion } from "framer-motion";
import ButtonFilter from "../components/ButtonFilter";
import { useState, useEffect } from "react";
import Head from "next/head";
import WorkCard from "../components/WorkCard";
import Link from "next/link";
import { useRouter } from "next/router";

const client = createClient({
  projectId: "a8osqt5d",
  dataset: "production",
  useCdn: true,

  apiVersion: "2021-10-21",
});

export const postQuery = `
  *[_type == "projects" ]{
    ...,
    images[]->
  }`;

export async function getStaticProps() {
  const project = await client.fetch(postQuery);

  return {
    props: {
      project,
    },
  };
}

const Work = ({ project }: any) => {
  //   const allCategories = ["All", "Logo", "Website", "App"];
  const allCategories = [
    "All",
    ...new Set(project.map((item: any) => item.type)),
  ];
  //

  // console.log(allCategories);
  // console.log(project)

  const [work, setWork] = useState(project);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button: any) => {
    if (button === "All") {
      setWork(project);
      return;
    }

    const filteredData = project.filter((item: any) => item.type === button);
    setWork(filteredData);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="keywords" content="people" />
      </Head>
      <motion.div
        className={styles.work}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <div className={styles.workPage}>
          <div>
            <h3 className={styles2.textHeader}>WORK</h3>
            <h1 className={styles2.textSubHeader}>
              My Masterpiece Collection
            </h1>
          </div>
        </div>

        <div className={styles.filters}>
          <ButtonFilter button={buttons} filter={filter} />
        </div>

        <div className={styles.portfolioMain}>
          <WorkCard workItem={work} />
        </div>
      </motion.div>
    </>
  );
};

export default Work;
