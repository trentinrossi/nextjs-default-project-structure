import styles from "./SimpleGrid.module.scss";

function SimpleGrid({ children }: any) {
  return <div className={styles.grid}>{children}</div>;
}

export default SimpleGrid