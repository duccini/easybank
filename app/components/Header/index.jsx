import Image from "next/image";
import styles from "./styles.module.css";

import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
      <header className={styles.menu}>
        <Image src={logo} height={25} alt="Easybank" quality={100} />
        <div className={styles.navbar}>
          <nav>
            <Link href="/">
              Home
              <div className={styles.hover}></div>
            </Link>
            <Link href="/">
              About <div className={styles.hover}></div>
            </Link>
            <Link href="/">
              Contact <div className={styles.hover}></div>
            </Link>
            <Link href="/">
              Blog <div className={styles.hover}></div>
            </Link>
            <Link href="/">
              Carrers <div className={styles.hover}></div>
            </Link>
          </nav>
        </div>
        <button type="button">Request Invite</button>
      </header>
    </div>
  );
}
