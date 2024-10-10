export const BusinessIcon = ({width = 22, height = 23}) => {
	const iconStyle = {
		display: "block",
		height: `${height}px`,
		width: `${width}px`,
		fill: "currentcolor"
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			aria-hidden="true"
			role="presentation"
			focusable="false"
			style={iconStyle}>
			<path d="M28 7h-8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM13 28H9v-5h4zm5 0h-3v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H4V4h14zm10 0h-8V9h8zm-3-12a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm-2-4a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm-8 4a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm-6 8a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm0-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"></path>
		</svg>
          
	)
}