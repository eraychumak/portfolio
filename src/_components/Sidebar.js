"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import CursorArrowRaysIcon from "@heroicons/react/24/outline/CursorArrowRaysIcon";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
// import UserIcon from "@heroicons/react/24/outline/UserIcon";

import styles from "./Sidebar.module.css";

function isActive(href, currentPath) {
  if (href === currentPath) {
    return styles.active;
  }

  return "";
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <section className={styles.opener}>
        <button>
          <Bars3Icon width="2rem"/>
        </button>
        <section className={styles.shrink}>
          <Link href="/" className={isActive("/", pathname)}>
            <HomeIcon width="1.5rem"/>
          </Link>
          <Link href="/projects/dev" className={isActive("/projects/dev", pathname)}>
            <CodeBracketIcon width="1.5rem"/>
          </Link>
          <Link href="#">
            <CursorArrowRaysIcon width="1.5rem"/>
          </Link>
          <Link href="mailto:eraychumak_@outlook.com">
            <EnvelopeIcon width="1.5rem"/>
          </Link>
        </section>
      </section>
      <section className={styles.nav}>
        <section>
          <p className={styles.tag}>NAVIGATION</p>
          <Link href="/" className={isActive("/", pathname)}>
            <HomeIcon width="1rem"/>
            <p>Home</p>
          </Link>
        </section>
        <section>
          <p className={styles.tag}>MY WORK</p>
          <Link href="/projects/dev" className={isActive("/projects/dev", pathname)}>
            <CodeBracketIcon width="1rem"/>
            <p>Development</p>
          </Link>
          <Link href="#">
            <CursorArrowRaysIcon width="1rem"/>
            <p>Designs/Graphics</p>
          </Link>
        </section>
        {/* <section>
          <p className={styles.tag}>CLIENT AREA</p>
          <Link href="/client">
            <UserIcon width="1rem"/>
            <p>Enquire</p>
          </Link>
          <Link href="/client">
            <UserIcon width="1rem"/>
            <p>Onboarding Form</p>
          </Link>
        </section> */}
        <div className={styles.fill}/>
        <section>
          <p className={styles.tag}>LINKS</p>
          <Link href="#">
            <ArrowTopRightOnSquareIcon width="1rem"/>
            <p>LinkedIn (@eray-chumak)</p>
          </Link>
          <Link href="#">
            <ArrowTopRightOnSquareIcon width="1rem"/>
            <p>My GitHub (@eray_chumak)</p>
          </Link>
        </section>
        <section>
          <p className={styles.tag}>GET IN TOUCH</p>
          <Link href="mailto:eraychumak_@outlook.com">
            <EnvelopeIcon width="1rem"/>
            <p>eraychumak_@outlook.com</p>
          </Link>
        </section>
      </section>
    </nav>
  );
}