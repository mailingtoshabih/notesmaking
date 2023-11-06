import React, { useState, useEffect } from 'react'
import styles from "./modal.module.css"





let date = new Date(Date.now());


export const Modal = () => {

    const [groupName, setGroupName] = useState("");


    const handleCreate = () => {
        if (!groupName) return;

        const data = JSON.parse(localStorage.getItem("groups"));

        if (data) {
            // cteate new grou
            const newGroup = {
                "groupName": groupName,
                "notes": [],
                "dates": date
            }
            const data = JSON.parse(localStorage.getItem("groups"));
            localStorage.setItem("groups", JSON.stringify(
                [...data, newGroup]
            ))
        }
        else {
            localStorage.setItem("groups", JSON.stringify(
                [
                    {
                        "groupName": groupName,
                        "notes": [],
                        "dates": date
                    }
                ]
            ))
        }

        window.location.reload();
    }


    return (
        <div className={styles.parent}>
            <div className={styles.modal}>

                <p>
                    Create New Notes Group
                </p>

                <div className={styles.input_parent}>
                    <p className={styles.label}>
                        Group Name
                    </p>
                    <input
                        type="text" name=""
                        onChange={(e) => setGroupName(e.target.value)} />
                </div>

                {/* <div className={styles.input_parent}>
                    <p className={styles.label}>
                        Group Name
                    </p>
                    <input
                        type="text" name=""
                        onChange={(e) => setGroupName(e.target.value)} />
                </div> */}


                <button onClick={handleCreate}>
                    CREATE
                </button>

            </div>
        </div>
    )
}
