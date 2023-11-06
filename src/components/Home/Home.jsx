import { Default } from "../Default/Default"
import { Modal } from "../Modal/Modal"
import { Side } from "../Side/Side"
import { View } from "../View/View"
import styles from "./home.module.css"
import { useState, useEffect } from "react"



export const Home = () => {

  const [view, setView] = useState();
  console.log(view)


  // console.log(view);


  useEffect(() => {
    window.scrollTo(0, 0);
    setView(JSON.parse(localStorage.getItem("currentnotes")));
  }, [])




  return (
    <div className={styles.parent}>

      <Side setView={setView} />

      {/* <Modal/> */}



      {
        view ?
          <View view={view} setView={setView} />
          :
          <Default />
      }



    </div>
  )
}
