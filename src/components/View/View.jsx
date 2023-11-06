import { Default } from '../Default/Default'
import { Note } from '../Note/Note'
import styles from './view.module.css'
import { useEffect, useState } from 'react'



export const View = ({ view, setView }) => {


    const [newnote, setNewnote] = useState(false);


    const handleSave = (e) => {
        e.preventDefault();
        if (!newnote) return;

        let date = new Date(Date.now());

        view.notes.push({ newnote, date }); //add date and chng this to object

        let data = JSON.parse(localStorage.getItem("groups"));
        let idx = 0;

        for (let key of data) {
            if (key?.groupName === view?.groupName) {
                data.splice(idx, 1);
                localStorage.removeItem("groups");
                localStorage.setItem("groups", JSON.stringify(
                    [...data, view]
                ))

                localStorage.setItem("currentnotes", JSON.stringify(view));
                window.location.reload();
                //  show this on now
                return;
            }
            idx++;
        }
    }





    return (
        <div className={styles.parent} >

            <nav className={styles.nav}>
                <div className={styles.box}>
                    {view?.groupName.substr(0,2)}
                </div>

                <p className={styles.name}>
                    {view.groupName}
                </p>
            </nav>

            <div className={styles.allnotes}>
                {
                    view?.notes?.map((note, index) =>

                        <Note key={index}
                            note={note}
                        />
                    )
                }
            </div>

            <div>
                <br /><br /> <br /> 
            </div>




            <div className={styles.write}>
                <form onSubmit={handleSave}>
                    <input type="text"
                        className={styles.input}
                        placeholder='Enter your text here...'
                        onChange={(e) => setNewnote(e.target.value)} />
                </form>

            </div>


        </div>
    )
}
