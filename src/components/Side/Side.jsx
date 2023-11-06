import { Group } from '../Group/Group';
import { Modal } from '../Modal/Modal';
import styles from './side.module.css';
import { useEffect, useState } from 'react'






export const Side = ({setView}) => {

  const [modal, setModal] = useState(false);
  const [groups, setGroups] = useState([]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("groups"));
    data && setGroups(data);
  }, [])



  return (
    <div className={styles.parent}>

      <div className={styles.btn_parent}>
        <p className={styles.logo}>
          Pocket Notes
        </p>

        <button className={styles.newnote}
          onClick={() => setModal(!modal)}>
          + Create Notes Group
        </button>
      </div>




      <div className={styles.groups}>
        <p>
          Groups
        </p>

        {
          groups?.map((group, index) => (
            <Group key={index} group={group} setView={setView}/>
          ))
        }
      </div>


      <div className={modal ? styles.modal_open : styles.modal_close}>
        <Modal />
      </div>


    </div>
  )
}
