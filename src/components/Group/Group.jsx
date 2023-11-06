import styles from "./group.module.css"

export const Group = ({ group, setView }) => {


    const handleClick = (e) => {

        group && setView(group);
        localStorage.setItem("currentnotes", JSON.stringify(group));
    }



    return (
        <div
            onClick={handleClick}
            className={styles.paren}>

            <div className={styles.hover}>
                <p className={styles.box}>
                    {group?.groupName.substr(0,2)}
                </p>

                <div className={styles.groupname}>
                    <p style={{fontSize : "18px"}}>
                        {group?.groupName}
                    </p>
                    <p style={{color : "indigo"}}>
                        {group?.notes.length} Notes
                    </p>
                </div>
            </div>

        </div>
    )
}
