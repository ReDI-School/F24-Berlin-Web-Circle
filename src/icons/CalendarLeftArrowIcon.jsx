export const CalendarLeftArrowIcon = ({ width = 12, height = 12 }) => {
  const iconStyle = {
    display: 'block',
    height: `${height}px`,
    width: `${width}px`,
    fill: 'currentcolor',
    margin: '12px',
  }

  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={iconStyle}
    >
      <path
        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
