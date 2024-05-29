"use client";
import Link from "next/link";
import "./about.css";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();

  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div>
      {pathName !== "/about/aboutstudent" ? (
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
      ) : (
        <button onClick={() => navigate("/about")}>
          Go To Main About Page
        </button>
      )}
      {children}
    </div>
  );
}
