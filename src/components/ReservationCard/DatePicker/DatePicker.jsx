import styles from './DatePicker.module.css'

const DatePicker = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  onToggle,
  renderAsForm = false,
  renderAsButton = false,
  setUserSelectedCheckIn,
  setUserSelectedCheckOut,
}) => {
  let Container
  if (renderAsForm) {
    Container = 'form'
  } else if (renderAsButton) {
    Container = 'button'
  } else {
    Container = 'div'
  }

  const handleCheckInChange = (date) => {
    setCheckInDate(date)
    setUserSelectedCheckIn(true)
  }

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date)
    setUserSelectedCheckOut(true)
  }


  return (
    <Container
      className={styles.datesPickerSection}
      onClick={!renderAsForm && renderAsButton ? onToggle : undefined}
      onSubmit={renderAsForm ? (e) => e.preventDefault() : undefined}
    >
      <div className={styles.checkinSection}>
        <div className={styles.checkinSectionContent}>
          <label>Check-in</label>
          {renderAsForm || !renderAsButton ? (
            <input
              type="text"
              value={checkInDate}
              placeholder="MM/DD/YYYY"
              onChange={(e) => handleCheckInChange(e.target.value)}
              required
            />
          ) : (
            <div>{checkInDate ? checkInDate : <span>Add date</span>}</div>
          )}
        </div>
      </div>
      <div className={styles.checkoutSection}>
        <div className={styles.checkoutSectionContent}>
          <label>Checkout</label>
          {renderAsForm || !renderAsButton ? (
            checkInDate && (
              <input
                type="text"
                className={styles.dateField}
                value={checkOutDate}
                placeholder="MM/DD/YYYY"
                onChange={(e) => handleCheckOutChange(e.target.value)}
                required
                min={checkInDate}
              />
            )
          ) : (
            <div>{checkOutDate ? checkOutDate : <span>Add date</span>}</div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default DatePicker
