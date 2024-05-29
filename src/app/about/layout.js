import Link from "next/link";
import "./about.css"

export default function Layout({ children }) {
  return (
    <div>
      <ul className="about-menu">
        <li>
          <h3>About Menu</h3>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About Collage</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
