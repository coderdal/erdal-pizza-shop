import React from "react";
import Image from "next/image";

import styles from "@/styles/header.module.css";
import { Dropdown, Button } from "@nextui-org/react";
import { MenuIcon } from "./MenuIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.blank}></div>

      <Image
        src="/images/logo.png"
        width={144}
        height={24}
        alt="logo"
        priority
      />

      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/foods" className={styles.link}>
              Foods
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/drinks" className={styles.link}>
              Drinks
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.dropdown}>
        <Dropdown>
          <Dropdown.Trigger>
            <Button
              auto
              icon={<MenuIcon filled={true} width={28} height={28} />}
              color="white"
              id="menu-button"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="foods" textValue="Foods">
              <Link href="/foods" className={styles.link}>
                <span>Foods</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="drinks" textValue="Drinks">
              <Link href="/drinks" className={styles.link}>
                <span>Drinks</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="about" textValue="About">
              <Link href="/about" className={styles.link}>
                <span>About</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="contact" textValue="Contact">
              <Link href="/contact" className={styles.link}>
                <span>Contact</span>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
