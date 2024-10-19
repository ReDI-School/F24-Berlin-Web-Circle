import styles from './ShortcutItem.module.css'

const ShortcutItem = ({ symbols, description }) => {
  return (
    <p className={styles.shortcutItem}>
      <div className={styles.symbolContainer}>
        <span className={styles.symbol}>
          {Array.isArray(symbols)
            ? symbols.map((symbol, index) => (
                <span key={index}>
                  {symbol}
                  {index < symbols.length - 1 && (
                    <span className={styles.slash}>/</span>
                  )}
                </span>
              ))
            : symbols}
        </span>
      </div>
      <span className={styles.description}>{description}</span>
    </p>
  )
}

export default ShortcutItem
