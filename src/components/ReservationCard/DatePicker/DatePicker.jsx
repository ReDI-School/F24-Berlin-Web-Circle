import { useEffect, useRef, useState } from 'react'
import { CloseButtonIcon } from '../../../icons/CloseButtonIcon'
import styles from './DatePicker.module.css'

const DatePicker = ({
  checkInDate,
  checkOutDate,
  minStayNights = 1,
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

  const checkInInputRef = useRef(null)
  const checkOutInputRef = useRef(null)

  useEffect(() => {
    if (!checkInDate || checkInError) {
      checkInInputRef?.current?.focus()
      setCheckInFocus(true)
    } else if (checkInDate && !checkInError) {
      checkOutInputRef?.current?.focus()
      setCheckOutFocus(true)
    }
  }, [checkInDate, checkInError])

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

  const handleCheckInFocus = () => {
    setCheckInFocus(true)
    setCheckOutFocus(false)
  }

  const handleCheckOutFocus = () => {
    setCheckOutFocus(true)
    setCheckInFocus(false)
  }

  const checkInDateObj = new Date(checkInDate)
  const checkOutDateObj = new Date(checkOutDate)
  const MS_PER_DAY = 1000 * 60 * 60 * 24

  const handleCheckInBlur = (dataCheckIn) => {
    if (validateDate(dataCheckIn)) {
      const checkInDateObj = new Date(dataCheckIn)
      const chekInOutDiff = (checkOutDateObj - checkInDateObj) / MS_PER_DAY

      if (checkOutDate && checkInDateObj >= checkOutDateObj) {
        setCheckInError('Check-in date must be earlier than check-out date')
      } else if (checkOutDate && chekInOutDiff < Number(minStayNights)) {
        setCheckInError(`Minimum stay: ${minStayNights} nights`)
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
      const checkOutDateObj = new Date(dataCheckOut)
      const chekInOutDiff = (checkOutDateObj - checkInDateObj) / MS_PER_DAY

      if (checkInDate && checkOutDateObj <= checkInDateObj) {
        setCheckOutError('Check-out date must be later than check-in date')
      } else if (chekInOutDiff < minStayNights) {
        setCheckOutError(`Minimum stay: ${minStayNights} nights`)
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
      className={`${styles.datesPickerSection} ${
        !checkInDate && !renderAsButton ? styles.checkOutBackground : ''
      }`}
      onClick={!renderAsForm && renderAsButton ? onToggle : undefined}
      onSubmit={renderAsForm ? (e) => e.preventDefault() : undefined}
    >
      <div
        className={`${styles.checkinSection} ${
          checkInError ? styles.checkInError : ''
        } ${!checkInDate && !renderAsButton ? styles.activeCheckIn : ''} ${
          renderAsButton ? styles.buttonTypeActive : ''
        } ${checkInFocus && !renderAsButton ? styles.activeCheckIn : ''}
        ${
          checkInFocus && !renderAsButton && !checkInError
            ? styles.activeCheckIn
            : ''
        }
        `}
        onClick={() => checkInInputRef.current?.focus()}
      >
        <div className={styles.checkinSectionContent}>
          <div className={styles.checkinInputWrapper}>
            <label>Check-in</label>
            {renderAsForm || !renderAsButton ? (
              <input
                type="text"
                ref={checkInInputRef}
                className={styles.dateField}
                value={
                  checkInFocus || checkInDate !== '' || checkInError
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
                onFocus={handleCheckInFocus}
                onBlur={() => {
                  if (inputCheckInDate === '' && !checkInFocus) {
                    setInputCheckInDate('')
                  } else if (checkInDate !== inputCheckInDate) {
                    handleCheckInBlur(inputCheckInDate)
                  } else {
                    if (checkInInputRef.current) {
                      checkInInputRef.current.blur()
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (checkInDate !== inputCheckInDate && e.key === 'Enter') {
                    handleCheckInBlur(inputCheckInDate)
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
          {renderAsForm ||
            (!renderAsButton && checkInDate && (
              <button
                className={styles.clearInputDateBtn}
                onClick={() => {
                  setCheckInDate('')
                  setCheckOutDate('')
                  setInputCheckInDate('')
                  setInputCheckOutDate('')
                  setCheckInError('')
                  setCheckOutError('')
                }}
              >
                <CloseButtonIcon />
              </button>
            ))}
        </div>
      </div>
      <div
        className={`${styles.checkoutSection} ${
          checkOutError && !checkInFocus ? styles.checkOutError : ''
        } ${
          checkOutFocus && !renderAsButton && !checkOutError
            ? styles.activeCheckOut
            : ''
        }`}
        onClick={() => checkOutInputRef.current?.focus()}
      >
        <div
          className={`${styles.checkoutSectionContent} ${
            !checkInDate && !renderAsButton ? styles.disabledCheckout : ''
          } ${checkOutError && checkInFocus ? styles.checkOutErrorLabel : ''}`}
        >
          <div className={styles.checkoutInputWrapper}>
            <label>Checkout</label>
            {renderAsForm || !renderAsButton ? (
              checkInDate !== 0 && (
                <input
                  type="text"
                  ref={checkOutInputRef}
                  className={`${styles.dateField} ${
                    checkOutError && checkInFocus
                      ? styles.checkOutErrorBackground
                      : ''
                  }`}
                  value={
                    checkOutFocus || checkOutDate !== '' || checkOutError
                      ? inputCheckOutDate
                      : checkOutDate
                  }
                  placeholder={
                    (!checkOutDate && checkOutFocus) ||
                    (checkOutDate && inputCheckOutDate === '') ||
                    (checkOutFocus === true && inputCheckOutDate !== '')
                      ? 'MM/DD/YYYY'
                      : 'Add date'
                  }
                  onFocus={handleCheckOutFocus}
                  onBlur={() => {
                    if (inputCheckOutDate === '' && !checkOutFocus) {
                      setInputCheckOutDate('')
                    } else if (checkOutDate !== inputCheckOutDate) {
                      handleCheckOutBlur(inputCheckOutDate)
                    } else {
                      if (checkOutInputRef.current) {
                        checkOutInputRef.current.blur()
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (
                      checkOutDate !== inputCheckOutDate &&
                      e.key === 'Enter'
                    ) {
                      handleCheckOutBlur(inputCheckOutDate)
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
          {renderAsForm ||
            (!renderAsButton && checkOutDate && (
              <button
                className={styles.clearInputDateBtn}
                onClick={() => {
                  setCheckOutDate('')
                  setInputCheckOutDate('')
                  setCheckOutError('')
                }}
              >
                <CloseButtonIcon />
              </button>
            ))}
        </div>
      </div>
    </Container>
  )
}

export default DatePicker
