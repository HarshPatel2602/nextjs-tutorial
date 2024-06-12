// import Image from "next/image";
// import Photo from "../../public/dummy.jpg"

export default function Home() {
  return (
    <main>
      <h1>Static Assets in Next</h1>
      {/* <Image src={Photo} alt="" width={100} hight={100} /> */}
      <img src="/dummy.jpg" alt="Description of image" width={100} height={100} />
    </main>
  );
}
