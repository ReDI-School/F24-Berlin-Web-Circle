export const CloseButtonIcon = ({ width = 12, height = 12 }) => {
  const iconStyle = {
    display: 'block',
    height: `${height}px`,
    width: `${width}px`,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '4',
    overflow: 'visible',
    margin: '10px',
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
      <path d="m6 6 20 20M26 6 6 26"></path>
    </svg>
  )
}