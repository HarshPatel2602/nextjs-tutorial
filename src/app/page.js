"use client";
import styles from "./page.module.css";
import { useState } from "react";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>Event, function and state</h1>
//       <button onClick={()=>alert("Hello next js")}>Click Me</button>
//     </main>
//   );
// }

export default function Home() {
  const [name, setName] = useState("Harsh");
  // let data = "Harsh"
  const apple = () => {
    // data = "Patel"
    setName("Patel");
  };

  const InnerComp = () => {
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Event, function and state {name}</h1>
      <button onClick={() => apple()}>Click Me</button>
      {/* <InnerComp /> */}
      {InnerComp()}
    </main>
  );
}
