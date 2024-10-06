export const DoorIcon = ({width = 24, height = 24}) => {
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
			<path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z">
			</path>
		</svg>
	)
}