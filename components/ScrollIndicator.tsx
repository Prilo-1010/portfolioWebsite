import styles from "../styles/Index.module.css";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }

    useEffect(()=> {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    },[])
    return ( 
        <>
        <div className={styles.progressBarMain}>
            <div className={styles.progressBar} style={{width : `${scrollTop}%`}}></div>
        </div>
        </>
     );
}
 
export default ScrollIndicator;