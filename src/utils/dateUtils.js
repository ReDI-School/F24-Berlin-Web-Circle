export const calculateNights = (checkIn, checkOut) => {
  return ((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) | 0
}

export const formatDate = (date) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

export const getStayPeriod = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)

  if (isNaN(checkInDate) || isNaN(checkOutDate)) {
    return ''
  }

  const formattedCheckIn = formatDate(checkInDate)
  const formattedCheckOut = formatDate(checkOutDate)

  return `${formattedCheckIn} - ${formattedCheckOut}`
}

export const convertStringToDateObject = (dateString) => {
  const [month, day, year] = dateString.split('/').map(Number)
  return { day, month: month - 1, year }
}

export const isBooked = (
  day,
  month,
  year,
  alreadyBookedDates,
  isSearchBarCalendar
) => {
  if (isSearchBarCalendar) return
  if (!Array.isArray(alreadyBookedDates)) {
    return false
  }
  const currentDateString = `${String(month + 1).padStart(2, '0')}/${String(
    day
  ).padStart(2, '0')}/${year}`

  return alreadyBookedDates.some(({ startDate, endDate }) => {
    const [startMonth, startDay, startYear] = startDate.split('/').map(Number)
    const [endMonth, endDay, endYear] = endDate.split('/').map(Number)
    const [currMonth, currDay, currYear] = currentDateString
      .split('/')
      .map(Number)

    const start = new Date(startYear, startMonth - 1, startDay)
    const end = new Date(endYear, endMonth - 1, endDay)
    const current = new Date(currYear, currMonth - 1, currDay)

    return current >= start && current <= end
  })
}

export const isDayBeforeBooked = (
  day,
  month,
  year,
  alreadyBookedDates,
  isSearchBarCalendar
) => {
  if (isSearchBarCalendar) return
  const currentDate = new Date(year, month, day).getTime()

  return alreadyBookedDates.some(({ startDate }) => {
    const [startMonth, startDay, startYear] = startDate.split('/').map(Number)
    const previousDay = new Date(startYear, startMonth - 1, startDay - 1)

    return currentDate === previousDay.getTime()
  })
}

export const minStayBeforeBooked = (
  day,
  month,
  year,
  alreadyBookedDates,
  minStayNights,
  isSearchBarCalendar
) => {
  if (isSearchBarCalendar) return
  const currentDate = new Date(year, month, day).getTime()

  return alreadyBookedDates.some(({ startDate }) => {
    const [startMonth, startDay, startYear] = startDate.split('/').map(Number)
    const bookedDate = new Date(startYear, startMonth - 1, startDay)
    const previousDay = new Date(bookedDate)
    previousDay.setDate(bookedDate.getDate() - 1)
    const minStayRangeStartDate = new Date(previousDay)
    minStayRangeStartDate.setDate(previousDay.getDate() - minStayNights)

    return (
      currentDate > minStayRangeStartDate.getTime() &&
      currentDate < previousDay.getTime()
    )
  })
}

export const isBetweenCheckInAndOut = (
  day,
  month,
  year,
  pickedCheckIn,
  pickedCheckOut
) => {
  if (pickedCheckIn && pickedCheckOut) {
    const currentDate = new Date(year, month, day).getTime()
    const checkInDate = new Date(
      pickedCheckIn.year,
      pickedCheckIn.month,
      pickedCheckIn.day
    ).getTime()
    const checkOutDate = new Date(
      pickedCheckOut.year,
      pickedCheckOut.month,
      pickedCheckOut.day
    ).getTime()

    return currentDate >= checkInDate && currentDate <= checkOutDate
  }
  return false
}

export const isWithinMinStay = (
  day,
  month,
  year,
  pickedCheckIn,
  pickedCheckOut,
  minStayNights
) => {
  if (pickedCheckIn && minStayNights && !pickedCheckOut) {
    const checkInDate = new Date(
      pickedCheckIn.year,
      pickedCheckIn.month,
      pickedCheckIn.day
    )
    const minStayEndDate = new Date(checkInDate)
    minStayEndDate.setDate(checkInDate.getDate() + minStayNights)

    const currentDate = new Date(year, month, day)

    return currentDate > checkInDate && currentDate < minStayEndDate
  }
  return false
}


export function formatDateToMonthDay(dateString) {
  if (!dateString || typeof dateString !== "string") {
    throw new Error("Invalid dateString provided");
  }
  if (dateString === "Add dates") {
    return dateString;
  }
  const parts = dateString.split("/");
  if (parts.length !== 3) {
    throw new Error("dateString must be in MM/DD/YYYY format");
  }
  const [month, day, year] = parts.map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    throw new Error("dateString contains invalid numbers");
  }
  const date = new Date(year, month - 1, day); 
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date created from dateString");
  }
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" }).format(date);
}


export function formatDateRange(checkIn, checkOut) {
  const parseDate = (dateString) => {
    if (!dateString || dateString === "Add dates") return null;
    const [month, day, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); 
  };

  const checkInDate = parseDate(checkIn);
  const checkOutDate = parseDate(checkOut);

  if (!checkInDate && !checkOutDate) {
    return "Add dates";
  }

  if (checkInDate && !checkOutDate) {
    const optionsMonthDay = { month: "short", day: "numeric" };
    return checkInDate.toLocaleDateString("en-US", optionsMonthDay);
  }

  const optionsMonthDay = { month: "short", day: "numeric" };
  const optionsDayOnly = { day: "numeric" };

  const checkInMonth = checkInDate.toLocaleDateString("en-US", { month: "short" });
  const checkOutMonth = checkOutDate.toLocaleDateString("en-US", { month: "short" });

  if (checkInMonth === checkOutMonth) {
    return `${checkInDate.toLocaleDateString("en-US", optionsMonthDay)} - ${checkOutDate.toLocaleDateString("en-US", optionsDayOnly)}`;
  }

  return `${checkInDate.toLocaleDateString("en-US", optionsMonthDay)} - ${checkOutDate.toLocaleDateString("en-US", optionsMonthDay)}`;
}
