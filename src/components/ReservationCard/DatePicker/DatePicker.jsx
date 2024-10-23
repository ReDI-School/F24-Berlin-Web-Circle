import { useState } from 'react'
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
  setCheckInError,
  setCheckOutError,
  checkInError,
  checkOutError,
}) => {
  const [focus, setFocus] = useState(false)
  const [inputCheckInDate, setInputCheckInDate] = useState('')
  const [inputCheckOutDate, setInputCheckOutDate] = useState('')

  let Container
  if (renderAsForm) {
    Container = 'form'
  } else if (renderAsButton) {
    Container = 'button'
  } else {
    Container = 'div'
  }

console.log('checkInDate!!!!!!!!', checkInDate)

  const validateDate = (input) => {
    const regex =
      /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/?|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:(?:0?2)(\/?|-|\.)(?:29)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/?|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    return regex.test(input)
  }

  const handleCheckInChange = (date) => {
    setInputCheckInDate(date)
  }

  const handleCheckOutChange = (date) => {
    setInputCheckOutDate(date)
  }

  const handleCheckInBlur = (dataCkeckIn) => {
    console.log('dataCkeckIn', dataCkeckIn)
    if (validateDate(dataCkeckIn)) {
      setCheckInError('')
      setCheckInDate(dataCkeckIn)
      setInputCheckInDate('')
      setUserSelectedCheckIn(true)
      alert(`Valid date: ${dataCkeckIn}`)
    } else if(inputCheckInDate === '') {
      setCheckInError('')
    }
    else {
      setCheckInError('This date is unavailable')
    }
  }

  // const handleCheckInBlur = (dataCkeckIn) => {
  //   console.log('dataCkeckIn', dataCkeckIn)
  //   if (!validateDate(dataCkeckIn)) {
  //     setCheckInError('This date is unavailable')
  //   } else {
  //     setCheckInError('')
  //     setCheckInDate(dataCkeckIn)
  //     setInputCheckInDate('')
  //     setUserSelectedCheckIn(true)
  //     alert(`Valid date: ${dataCkeckIn}`)
  //   }
  // }

  const handleCheckOutBlur = (dataCkeckOut) => {
    console.log('dataCkeckOut', dataCkeckOut)
    if (validateDate(dataCkeckOut)) {
      setCheckOutError('')
      setCheckOutDate(dataCkeckOut)
      setInputCheckOutDate('')
      setUserSelectedCheckOut(true)
      alert(`Valid date: ${dataCkeckOut}`)
    } else if(inputCheckOutDate === '') {
      setCheckOutError('')
    }
    else {
      setCheckOutError('This date is unavailable')
    }
  }

  // const handleCheckOutBlur = (dataCkeckOut) => {
  //   console.log('dataCkeckOut', dataCkeckOut)
  //   if (!validateDate(dataCkeckOut)) {
  //     setCheckOutError('This date is unavailable')
  //   } else {
  //     setCheckOutError('')
  //     setCheckOutDate(dataCkeckOut)
  //     setInputCheckOutDate('')
  //     setUserSelectedCheckOut(true)
  //     alert(`Valid date: ${dataCkeckOut}`)
  //   }
  // }

  return (
    <Container
      className={styles.datesPickerSection}
      onClick={!renderAsForm && renderAsButton ? onToggle : undefined}
      onSubmit={renderAsForm ? (e) => e.preventDefault() : undefined}
    >
      <div
        className={`${styles.checkinSection} ${
          checkInError ? styles.checkInError : ''
        }`}
      >
        <div className={styles.checkinSectionContent}>
          <label>Check-in</label>
          {renderAsForm || !renderAsButton ? (
            <input
              type="text"
              className={styles.dateField}
              value={focus || inputCheckInDate ? inputCheckInDate : checkInDate}
              placeholder={focus ? 'MM/DD/YYYY' : checkInDate ? '' : 'Add date'}
              onFocus={() => setFocus(true)}
              // onBlur={() => handleCheckInBlur(inputCheckInDate)}
              onBlur={() => {
                handleCheckInBlur(inputCheckInDate)
                setFocus(false)}
              }
              onChange={(e) => handleCheckInChange(e.target.value)}
              maxLength={10}
              required
            />
          ) : (
            <div>{checkInDate ? checkInDate : <span>Add date</span>}</div>
          )}
        </div>
      </div>
      <div
        className={`${styles.checkoutSection} ${
          checkOutError ? styles.checkOutError : ''
        }`}
      >
        <div className={styles.checkoutSectionContent}>
          <label>Checkout</label>
          {renderAsForm || !renderAsButton ? (
            checkInDate && (
              <input
                type="text"
                className={styles.dateField}
                // value={checkOutDate}
                // value={inputCheckOutDate || checkOutDate}
                value={focus || inputCheckInDate ? inputCheckInDate : checkInDate}
                placeholder={
                  focus ? 'MM/DD/YYYY' : checkOutDate ? '' : 'Add date'
                }
                onFocus={() => setFocus(true)}
                // onBlur={handleCheckOutBlur}
                onBlur={() => {
                  setFocus(false)
                  handleCheckOutBlur(inputCheckOutDate)
                }}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                maxLength={10}
                required
                min={inputCheckInDate}
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
