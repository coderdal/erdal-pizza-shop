import React from "react";
import styles from "@/styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/logo2.png"
            width={120}
            height={90}
            alt="Shop logo"
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/foods" className={styles.link}>
              Foods
            </Link>
          </li>
          <li>
            <Link href="/foods" className={styles.link}>
              Drinks
            </Link>
          </li>
          <li>
            <Link href="/foods" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/foods" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>

        <ul className={styles.ul}>
          <li>
            <Link href="/privacy" className={styles.link}>
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/calories" className={styles.link}>
              Calories
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.link}>
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
