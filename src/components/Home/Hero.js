import React from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>Erdal Pizzeria</h1>
          <Link href="/make" className={styles.makeown}>
            Make Your Own Pizza
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/pizza.png"
            width={400}
            height={400}
            alt="Pizza image"
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
