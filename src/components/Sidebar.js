import Link from "next/link";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import CursorArrowRaysIcon from "@heroicons/react/24/outline/CursorArrowRaysIcon";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";

import styles from "@/components/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.container}>
      <section className={styles.opener}>
        <button>
          <Bars3Icon width="2rem"/>
        </button>
        <section className={styles.shrink}>
          <Link href="#" className={styles.active}>
            <HomeIcon width="1.5rem"/>
          </Link>
          <Link href="#">
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
        <p className={styles.tag}>NAVIGATION</p>
        <Link href="#" className={styles.active}>
          <HomeIcon width="1rem"/>
          <p>Home</p>
        </Link>
        <Link href="#">
          <CodeBracketIcon width="1rem"/>
          <p>Dev Projects</p>
        </Link>
        <Link href="#">
          <CursorArrowRaysIcon width="1rem"/>
          <p>Designs/Graphics</p>
        </Link>
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
          <p className={styles.tag}>CONTACT</p>
          <Link href="mailto:eraychumak_@outlook.com">
            <EnvelopeIcon width="1rem"/>
            <p>eraychumak_@outlook.com</p>
          </Link>
        </section>
      </section>
    </nav>
  );
}