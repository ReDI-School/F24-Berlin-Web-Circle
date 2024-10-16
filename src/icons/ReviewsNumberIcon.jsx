export const ReviewsNumberIcon = ({width = 26, height = 26}) => {
	const iconStyle = {
		display: "block",
		height: `${height}px`,
		width: `${width}px`,
		paddingTop: "10px"
		
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			aria-hidden="true"
			role="presentation"
			focusable="false"
			style={iconStyle}>
			<path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
		</svg>
          
	)
}