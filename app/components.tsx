import styles from "./components.module.css";

export function DonateButton() {
  return (
    <a href="/donate" className={styles.donateButton}>
      Donate
    </a>
  );
}
