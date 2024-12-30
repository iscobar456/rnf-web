import Image from "next/image";
import styles from "./page.module.css";
import { DonateButton } from "./components";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/img/header-background.jpg"
          alt="Header Background"
          layout="fill"
          objectFit="cover"
        />
        <p>
          Focused on community needs, the Rwanda Nurture Foundation helps single 
          mothers learn skills that enhance family well-being.
        </p>
      </header>
      <section id="news" className={styles.newsSection}>
          <h2>See What We've Been Doing</h2>
          <p>
            The Rwanda Nurture Foundation was officially launched on November 4,
            2024, with a mission to provide early childhood education and skills
            training for single mothers. The foundation aims to foster both the
            intellectual and socio-economic development of young children and
            empower single mothers by equipping them with practical skills, such
            as sewing, to improve their livelihoods. With a strong focus on
            community needs, the foundation targets single mothers eager to
            learn and gain skills that will enhance their families' well-being.
          </p>
      </section>
      <section id="about" className={styles.aboutSection}>
        <Image
          src="/img/about-us.jpeg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.aboutContent}>
          <h2>About Us</h2>
          <p>
            The Rwanda Nurture Foundation was officially launched on November 4,
            2024, with a mission to provide early childhood education and skills
            training for single mothers. The foundation aims to foster both the
            intellectual and socio-economic development of young children and
            empower single mothers by equipping them with practical skills, such
            as sewing, to improve their livelihoods. With a strong focus on
            community needs, the foundation targets single mothers eager to
            learn and gain skills that will enhance their families' well-being.
          </p>
        </div>
      </section>
      <section className={styles.donateSection}>
        <h2>Support Our Cause</h2>
        <p>
          The Rwanda Nurture Foundation was officially launched on November 4,
          2024, with a mission to provide early childhood education and skills
          training for single mothers. The foundation aims to foster both the
          intellectual and socio-economic development of young children and
          empower single mothers by equipping them with practical skills, such
          as sewing, to improve their livelihoods. With a strong focus on
          community needs, the foundation targets single mothers eager to learn
          and gain skills that will enhance their families' well-being.
        </p>
        <p>Learn More</p>
        <DonateButton />
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 Rwanda Nurture Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
