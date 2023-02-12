/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/Work.module.css";
import styles2 from "../styles/Index.module.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { urlFor } from "../sanity";
import { Button } from "./Button";
import { useState, useLayoutEffect } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";

const WorkCard = ({ workItem }: any) => {
  const [click, setClick] = useState(false);

  const handleClick = (e: boolean) => setClick(e);
  let router = useRouter();

  const idknow: number = parseInt(router.asPath.charAt(11));
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
     setCurrentIndex(0)
  },[])

  return (
    <>
      {workItem.map((project: any) => {
        return (
          <>
            <div className={styles.workContainer} key={project.id}>
              <img
                className={styles.backgroundImage}
                alt="pic"
                src={urlFor(project.image).url()}
              />
              {click && idknow == project.id && (
                <div key={idknow}>
                  <Modal>
                    <div className={styles.projectContainer}>
                      <div className={styles.topLink}>
                        <div className={styles.arrows}>
                          <i
                            className={styles.arrow}
                            onClick={() => {
                              if (currentIndex === 0) {
                                setCurrentIndex(currentIndex);
                              } else {
                                setCurrentIndex(currentIndex - 1);
                              }
                            }}
                          >
                            <IoMdArrowDropleft />
                          </i>
                          <i
                            className={styles.arrow}
                            onClick={() => {
                              if (currentIndex === (project.images.length - 1)) {
                                setCurrentIndex(currentIndex);
                              } else {
                                setCurrentIndex(currentIndex + 1);
                              }
                            }}
                          >
                            <IoMdArrowDropright />
                          </i>
                        </div>
                        <div className={styles.close}>
                          <i
                            className={styles.closeWork}
                            onClick={() => handleClick(false)}
                          >
                            <MdOutlineClose />
                          </i>
                        </div>
                      </div>
                      <div className={styles.project}>
                        {project.images
                          .filter((item: any) => item.id === currentIndex)
                          .map((pic: any, index: any) => (
                            <img
                              className={styles.imgWork}
                              alt="pic"
                              key={pic._id}
                              src={urlFor(pic.image).url()}
                            />
                          ))}
                      </div>
                      <div className={styles.projectLink}>
                        <Link
                          style={{ color: "var(--white)" }}
                          className={styles2.textParagraph}
                          href={`${project.link}`}
                        >
                          {project.link}
                        </Link>
                      </div>
                    </div>
                  </Modal>
                </div>
              )}
              <div onClick={() => handleClick(true)} className={styles.text}>
                {/* <Link href={`work?${project.id}`}>View Inner</Link> */}
                <Button link={`work?work=${project.id}`}>View Work</Button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default WorkCard;
