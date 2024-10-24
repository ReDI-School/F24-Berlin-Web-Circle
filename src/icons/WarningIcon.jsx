export const WarningIcon = ({ width = 12, height = 12 }) => {
  const iconStyle = {
    display: 'block',
    height: `${height}px`,
    width: `${width}px`,
    fill: 'currentcolor',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-label="Error"
      role="img"
      focusable="false"
      style={iconStyle}
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z"></path>
    </svg>
  )
}
