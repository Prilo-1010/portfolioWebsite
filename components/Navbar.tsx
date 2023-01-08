import Image from "next/image";
import Link from "next/link";
import image from "../public/images/Logo.png";
import styles from "../styles/Index.module.css";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useRouter } from "next/router";

const Navbar = () => {
  //Fist state
  const [click, setClick] = useState(false);

  //state after
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(true);

  const router = useRouter()
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={image} width={60} height={60} alt="logo" />
          </div>

          <div className={styles.links}>
            <div onClick={handleClick}>
              <div style={{paddingRight:10}} className={click ? styles.navLinksActOff: styles.navLinksAct }>
                <Link
                className={router.pathname=="/"? styles.active :  styles.navLinksActive }
                  onClick={closeMenu}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={router.pathname=="/about"? styles.active : styles.navLinksActive}
                  onClick={closeMenu}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className={router.pathname=="/work"? styles.active  : styles.navLinksActive }
                  onClick={closeMenu}
                  href="/work"
                >
                  Work
                </Link>
              </div>
            </div>
            <span className={styles.vertical}></span>
            <div style={{paddingLeft:20}}>
              <Link
                className={styles.socialLinks}
                href="https://www.instagram.com/lolo_prilo"
              >
                <BsInstagram />
              </Link>
              <Link
                className={styles.socialLinks}
                href="https://www.twitter.com/ProsperLolo"
              >
                <BsTwitter />
              </Link>
              <Link
                className={styles.socialLinks}
                href="https://www.linkedin.com/in/prosperlolo"
              >
                <GrLinkedinOption />
              </Link>
              <Link
                className={styles.socialLinks}
                href="https://github.com/Prilo-1010"
              >
                <BsGithub />
              </Link>
            </div>
            <span className={styles.vertical1}></span>
            <div className={styles.menuIcon} onClick={handleClick}>
              {click ? (
                <i>
                  <ImMenu4 color="white" />
                </i>
              ) : (
                <i>
                  <ImMenu3 />
                </i>
              )}
            </div>
          </div>
          <div className={click? (styles.nav1):"none"}  onClick={handleClick}>
              <span className={styles.horizontal}></span>
          </div>
        </div>
        {/* <ScrollIndicator/> */}
      </div>
    
    </>
  );
};

export default Navbar;
