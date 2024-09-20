import styles from './CostsSummary.module.css'

const CostsSummary = () => {
  // These will be replaced by dynamic data fetched from the database in the future
  const checkInDate = '2024-09-20'
  const checkOutDate = '2024-09-22'
  const pricePerNight = 90
  const serviceFee = 30

  const nights =
    checkInDate && checkOutDate
      ? (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
      : 0
  const basePrice = nights * pricePerNight
  const totalPrice = basePrice + serviceFee

  return (
    <div className={styles.priceSummary}>
      <div className={styles.infoSection}>
        <div>You won&apos;t be charged yet</div>
        <div>Price per night includes VAT and all applicable fees.</div>
      </div>
      <div className={styles.pricingDetails}>
        <div className={styles.priceItemsContainer}>
          <div className={styles.priceItem}>
            <span>{`€ ${pricePerNight} x ${nights} night${
              nights > 1 ? 's' : ''
            }`}</span>
            <span>{`€ ${basePrice}`}</span>
          </div>
          <div className={styles.priceItem}>
            <span>Airbnb service fee</span>
            <span>{`€ ${serviceFee}`}</span>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <strong>Total</strong>
          <strong>{`€ ${totalPrice}`}</strong>
        </div>
      </div>
    </div>
  )
}

export default CostsSummary
