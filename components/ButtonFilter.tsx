import styles from "../styles/Work.module.css";
import { useState } from "react";

const ButtonFilter = ({button, filter}:any) => {
     //Fist state
  const [click, setClick] = useState(false);

  //state after
  const handleClick = () => setClick(!click);
    return (  
        <div className={styles.workLinks} onClick={handleClick}>
        {
            button.map((cat: any, i:any)=>{
                return <span key={i}  onClick={()=> filter(cat) } className={click ? styles.filterLinks: styles.filterLinksActive }> {cat}</span>
            })
        }
    </div>
    );
}
 
export default ButtonFilter;
