"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();

  return (
    <div>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-menu">
          <li>
            <h3>Login Menu</h3>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go To Main Login Page</Link>
      )}
      {children}
    </div>
  );
}
