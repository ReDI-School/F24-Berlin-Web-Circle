export const CommunicationIcon = ({ width = 32, height = 32 }) => {
  const iconStyle = {
    display: 'block',
    height: `${height}px`,
    width: `${width}px`,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    overflow: 'visible',
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
      <path
        fill="none"
        d="M26 3a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-6.32L16 29.5 12.32 25H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
      ></path>
    </svg>
  )
}
