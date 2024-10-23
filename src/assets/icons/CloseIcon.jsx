export const CloseIcon = ({ width = 16, height = 16 }) => {
    const iconStyle = {
      display: 'block',
      height: `${height}px`,
      width: `${width}px`,
      stroke: 'currentcolor',
      overflow: 'visible',
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="Black"
        aria-label="close-button"
        style={iconStyle}
      >
        <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.12 5.71a.996.996 0 1 0-1.41 1.41L10.59 12l-4.88 4.88a.996.996 0 1 0 1.41 1.41L12 13.41l4.88 4.88a.996.996 0 1 0 1.41-1.41L13.41 12l4.88-4.88a.996.996 0 0 0 0-1.41z"/>
      </svg>
    )
}