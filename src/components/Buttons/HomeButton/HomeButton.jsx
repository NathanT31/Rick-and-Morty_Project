import styles from "./HomeButton.module.css";

function HomeButton({ children }) {
  return (
    <button className={styles.homeButton} role="button">
      {children}
    </button>
  );
}

export default HomeButton;
