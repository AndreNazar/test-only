import styles from './Title.module.scss'

export function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.verticalLine}></div>
        <h2 className={styles.text}>Исторические даты</h2>
    </div>
  )
}