import styles from "../layout.module.css"
const Logo = () => {
    return (
        <div className="logo">
            <span className={styles.logoText}>David</span>
            <span className={styles.logoDot}></span>
        </div>
    )
}

export default Logo;