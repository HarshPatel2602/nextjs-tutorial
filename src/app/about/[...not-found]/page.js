import Link from "next/link";

export default function AboutNotFound() {
  return (
    <div>
      <h1>This About 404 Page is Not Found</h1>
      <br />
      <br />
      <Link href="/about">Go To About Home Page</Link>
    </div>
  );
}
