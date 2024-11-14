export const AccuracyIcon = ({ width = 32, height = 32 }) => {
  const iconStyle = {
    display: 'block',
    height: `${height}px`,
    width: `${width}px`,
    fill: 'currentColor',
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={iconStyle}
    >
      <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"></path>
    </svg>
  )
}
