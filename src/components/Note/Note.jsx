import styles from './note.module.css'

export const Note = ({ note }) => {

    let date = new Date(Date.now());


    return (
        <div className={styles.parent}>
            <p className={styles.dates}>
                {note?.date.toString().substring(11, 16)}
                <br />
                {note?.date.toString().substring(0, 10)}
            </p>
            <p className={styles.note}>
                {
                    note && note.newnote
                }
            </p>
        </div>
    )
}
