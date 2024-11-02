export const VerifiedIcon = ({width = 20, height = 20}) => {
	const iconStyle = {
		display: "block",
		height: `${height}px`,
		width: `${width}px`,
		fill: "white"
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			aria-hidden="true"
			role="presentation"
			focusable="false"
			style={iconStyle}>
			<path d="M13.876 21.464l8.732-8.732-1.532-1.532-7.2 7.149-2.809-2.809-1.532 1.532 4.341 4.392zM16.071 4l9.804 4.392v6.536c0 6.026-4.187 11.694-9.804 13.072-5.617-1.379-9.804-7.047-9.804-13.072v-6.536l9.804-4.391z"></path>
		</svg>
          
	)
}