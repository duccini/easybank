"use client";

import { useState } from "react";

import Image from "next/image";
import styles from "./styles.module.css";

import logo from "@/public/logo.svg";
import Link from "next/link";
import Button from "../Button";

import close from "@/public/icon-close.svg";
import open from "@/public/icon-hamburger.svg";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.menu_wrap}>
      <header className={styles.menuMobile}>
        <Image src={logo} height={25} alt="Easybank" quality={100} />
        <Image
          src={toggle ? close : open}
          height={25}
          width={40}
          alt="toggle menu"
          quality={100}
          onClick={() => setToggle(!toggle)}
        />
      </header>

      {toggle && (
        <div className={`${styles.menuMobile} ${styles.navbarMobile}`}>
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
      )}

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

        <Button />
      </header>
    </div>
  );
}
