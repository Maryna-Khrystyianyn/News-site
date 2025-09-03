import styles from "./title.module.css"

export const Title = ({title}) => {
    return ( 
        <>
            <h3 className={styles.title}>{title}</h3>
        </>
     );
}