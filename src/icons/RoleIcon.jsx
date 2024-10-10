export const RoleIcon = ({width = 12, height = 12}) => {
	const iconStyle = {
		height: `${height}px`,
		width: `${width}px`,
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-hidden="true"
			role="img"
			focusable="false"
			style={iconStyle}>
			<path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
		</svg>
          
	)
}