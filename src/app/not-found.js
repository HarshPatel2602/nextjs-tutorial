import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This 404 Page is Not Found</h1>
      <br/>
      <br/>
      <Link href="/">Go To Home Page</Link>
    </div>
  );
}
