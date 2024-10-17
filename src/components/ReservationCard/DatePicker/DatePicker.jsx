import { useEffect, useRef, useState } from 'react'
import styles from './DatePicker.module.css'

const DatePicker = ({
  checkInDate,
  checkOutDate,
  inputCheckInDate,
  inputCheckOutDate,
  setInputCheckInDate,
  setInputCheckOutDate,
  setCheckInDate,
  setCheckOutDate,
  onToggle,
  renderAsForm = false,
  renderAsButton = false,
  setUserSelectedCheckIn,
  setUserSelectedCheckOut,
  setCheckInError,
  setCheckOutError,
  checkInError,
  checkOutError,
}) => {
  const [checkInFocus, setCheckInFocus] = useState(false)
  const [checkOutFocus, setCheckOutFocus] = useState(false)

  const checkInInputRef = useRef(null);
  const checkOutInputRef = useRef(null);

  useEffect(() => {
    if (!checkInDate || checkInError) {
      checkInInputRef?.current?.focus();
      setCheckInFocus(true);
    } else if (checkInDate && !checkInError) {
      checkOutInputRef?.current?.focus();
      setCheckOutFocus(true);
    }
  }, [checkInDate, checkInError]);


  const Container = renderAsForm ? 'form' : renderAsButton ? 'button' : 'div'

  const validateDate = (input) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/
    return regex.test(input)
  }

  const handleCheckInChange = (date) => {
    setInputCheckInDate(date)
  }

  const handleCheckOutChange = (date) => {
    setInputCheckOutDate(date)
  }

  const handleCheckInBlur = (dataCheckIn) => {
    if (validateDate(dataCheckIn)) {
      const checkOutDateObj = new Date(checkOutDate)
      const checkInDateObj = new Date(dataCheckIn)
      if (checkOutDate && checkInDateObj >= checkOutDateObj) {
        setCheckInError('Check-in date must be earlier than check-out date')
      } else {
        setCheckInError('')
        setCheckInDate(dataCheckIn)
        setUserSelectedCheckIn(true)
      }
    } else if (inputCheckInDate === '') {
      setCheckInError('')
    } else {
      setCheckInError('This date is unavailable')
    }
  }

  const handleCheckOutBlur = (dataCheckOut) => {
    if (validateDate(dataCheckOut)) {
      const checkInDateObj = new Date(checkInDate)
      const checkOutDateObj = new Date(dataCheckOut)
      if (checkInDate && checkOutDateObj <= checkInDateObj) {
        setCheckOutError('Check-out date must be later than check-in date')
      } else {
        setCheckOutError('')
        setCheckOutDate(dataCheckOut)
        setUserSelectedCheckOut(true)
      }
    } else if (inputCheckOutDate === '') {
      setCheckOutError('')
    } else {
      setCheckOutError('This date is unavailable')
    }
  }

  return (
    <Container
      className={`${styles.datesPickerSection} ${!checkInDate && !renderAsButton ? styles.checkOutBackground : ''}`}
      onClick={!renderAsForm && renderAsButton ? onToggle : undefined}
      onSubmit={renderAsForm ? (e) => e.preventDefault() : undefined}
    >
      <div
        className={`${styles.checkinSection} ${
          checkInError ? styles.checkInError : ''
        } ${!checkInDate && !renderAsButton ? styles.activeCheckIn : ''} ${
          renderAsButton ? styles.buttonTypeActive : ''
        }`}
      >
        <div className={styles.checkinSectionContent}>
          <label>Check-in</label>
          {renderAsForm || !renderAsButton ? (
            <input
              type="text"
              ref={checkInInputRef}
              className={styles.dateField}
              value={
                (checkInFocus || checkInDate !== '' || checkInError)
                  ? inputCheckInDate 
                  : checkInDate
              }
              placeholder={
                (!checkInDate && checkInFocus) ||
                (checkInDate && inputCheckInDate === '') ||
                (checkInFocus === true && inputCheckInDate !== '')
                  ? 'MM/DD/YYYY'
                  : 'Add date'
              }
              onFocus={() => setCheckInFocus(true)}
              // onBlur={() => {
              //   if (checkInDate !== inputCheckInDate) {
              //     handleCheckInBlur(inputCheckInDate)
              //     setCheckInFocus(false)
              //   }
              // }}
              onBlur={() => {
                if (inputCheckInDate === '' && !checkInFocus) {
                  setCheckInFocus(false);
                  setInputCheckInDate('');
                } else if (checkInDate !== inputCheckInDate) {
                  handleCheckInBlur(inputCheckInDate);
                  setCheckInFocus(false);
                } else {
                  setCheckInFocus(false);
                }
              }}
              
              onKeyDown={(e) => {
                if (checkInDate !== inputCheckInDate && e.key === 'Enter') {
                  handleCheckInBlur(inputCheckInDate)
                  setCheckInFocus(false)
                }
              }}
              onChange={(e) => handleCheckInChange(e.target.value)}
              maxLength={10}
              required={checkInFocus}
            />
          ) : (
            <div>{checkInDate ? checkInDate : <span>Add date</span>}</div>
          )}
        </div>
      </div>
      <div
        className={`${styles.checkoutSection} ${
          checkOutError ? styles.checkOutError : ''
        } ${checkInDate && !renderAsButton && !checkOutError ? styles.activeCheckOut : ''}`}
      >
        <div
          className={`${styles.checkoutSectionContent} ${
            !checkInDate && !renderAsButton ? styles.disabledCheckout : ''
          }`}
        >
          <label>Checkout</label>
          {renderAsForm || !renderAsButton ? (
            checkInDate !== 0 && (
              <input
                type="text"
                ref={checkOutInputRef}
                className={styles.dateField}
                value={
                  (checkOutFocus || checkOutDate !== '' || checkOutError)
                    ? inputCheckOutDate
                    : checkOutDate
                }
                placeholder={
                  (!checkOutDate && checkOutFocus) || 
                  // (checkInDate && inputCheckInDate === '') ||
                  (checkOutDate && inputCheckOutDate === '') ||
                  (checkOutFocus === true && inputCheckOutDate !== '')
                    ? 'MM/DD/YYYY'
                    : 'Add date'
                }
                onFocus={() => setCheckOutFocus(true)}
                // onBlur={() => {
                //   if (checkOutDate !== inputCheckOutDate) {
                //     handleCheckOutBlur(inputCheckOutDate)
                //     setCheckOutFocus(false)
                //   }
                // }}
                onBlur={() => {
                  if (inputCheckOutDate === '' && !checkOutFocus) {
                    setCheckOutFocus(false);
                    setInputCheckOutDate('');
                  } else if (checkOutDate !== inputCheckOutDate) {
                    handleCheckOutBlur(inputCheckOutDate);
                    setCheckOutFocus(false);
                  } else {
                    setCheckOutFocus(false);
                  }
                }}

                onKeyDown={(e) => {
                  if (checkOutDate !== inputCheckOutDate && e.key === 'Enter') {
                    handleCheckOutBlur(inputCheckOutDate)
                    setCheckOutFocus(false)
                  }
                }}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                maxLength={10}
                required={checkOutFocus}
                min={inputCheckInDate}
                disabled={!checkInDate}
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
