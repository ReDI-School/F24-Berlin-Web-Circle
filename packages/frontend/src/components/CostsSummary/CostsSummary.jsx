import styles from './CostsSummary.module.css'

const CostsSummary = ({
  checkInDate,
  checkOutDate,
  pricePerNight,
  airbnbServiceFee,
  cleaningFee,
  longStayDiscount,
  nightsCountForDiscount,
}) => {
  const calculateNights = (checkIn, checkOut) => {
    return (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
  }

  const nights =
    checkInDate && checkOutDate ? calculateNights(checkInDate, checkOutDate) : 0
  const isDiscount = nights >= nightsCountForDiscount

  const basePrice = nights * pricePerNight
  const totalPrice =
    basePrice +
    airbnbServiceFee +
    cleaningFee -
    (isDiscount ? longStayDiscount : 0)

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
          {longStayDiscount > 0 && isDiscount && (
            <div className={styles.priceItem}>
              <span>Long stay discount</span>
              <span
                className={styles.discountPriceItem}
              >{`-€ ${longStayDiscount}`}</span>
            </div>
          )}
          {cleaningFee > 0 && (
            <div className={styles.priceItem}>
              <span>Cleaning fee</span>
              <span>{`€ ${cleaningFee}`}</span>
            </div>
          )}
          {airbnbServiceFee > 0 && (
            <div className={styles.priceItem}>
              <span>Airbnb service fee</span>
              <span>{`€ ${airbnbServiceFee}`}</span>
            </div>
          )}
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
