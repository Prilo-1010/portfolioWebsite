import styles from "../styles/About.module.css";

function Skills({text, percent, skill}: any) {
    return (
        <>
            <div className={styles.skillMain}>
                <div className={styles.skillInfo}>
                    <p>{text}</p>
                    <p className='percent'>{percent}</p>
                </div>
                <div className={styles.skillBar}>
                    <span className={skill}></span>
                </div>
            </div>

        </>
    )
}

export default Skills
