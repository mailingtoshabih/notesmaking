import styles from './default.module.css'
import img from "../../assets/img.png"

export const Default = () => {
    return (
        <div className={styles.parent}>

            <div className={styles.box}>

                <img
                    className={styles.img}
                    src={img}
                    alt="pic" />

                <h1>Pocket Notes</h1>
                <p>
                    Send and receive messages without keeping your phone online. <br />
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>

            </div>
        </div>
    )
}
