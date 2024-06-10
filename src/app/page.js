import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
  return (
    <main>
      <h1>Image Optimization in next.js</h1>

      {/* <Image src={Profile} />
      <img src={Profile.src} /> */}

      <Image
        src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={1800}
        height={1800}
      />
    </main>
  );
}
