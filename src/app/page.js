// "use client";
// import styles from "./page.module.css";
// import { useState } from "react";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>Event, function and state</h1>
//       <button onClick={()=>alert("Hello next js")}>Click Me</button>
//     </main>
//   );
// }

// export default function Home() {
//   const [name, setName] = useState("Harsh");
//   // let data = "Harsh"
//   const apple = () => {
//     // data = "Patel"
//     setName("Patel");
//   };

//   const InnerComp = () => {
//     return (
//       <h1>Inner Component</h1>
//     )
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Event, function and state {name}</h1>
//       <button onClick={() => apple()}>Click Me</button>
//       {/* <InnerComp /> */}
//       {InnerComp()}
//     </main>
//   );
// }



"use client"
import Link from 'next/link'
import {useRouter} from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <main>
     <h1>Basic Routing | Make New Page</h1> 
     <Link href="/login" >Go to Login Page</Link>
     <br />
     <br />
     <Link href="/about" >Go to About Page</Link>
     <br />
     <br />
     <button onClick={()=>navigate("/login")} >Go to Login Page</button>
     <br />
     <br />
     <button onClick={()=>navigate("/about")} >Go to About Page</button>


    </main>
  )
}
