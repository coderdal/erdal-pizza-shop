import React from "react";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>Foods</li>
          <li>Drinks</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
