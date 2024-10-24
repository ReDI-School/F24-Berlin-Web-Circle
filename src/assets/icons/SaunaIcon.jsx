export const SaunaIcon = ({ width = 24, height = 24 }) => {
  const iconStyle = {
    display: "block",
    height: `${height}px`,
    width: `${width}px`,
    fill: "currentcolor",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={iconStyle}
    >
      <path d="M19 1v2H4v14h1.27a7.52 7.52 0 0 1 3.75-4.65 4.5 4.5 0 1 1 6.96 0A7.51 7.51 0 0 1 19.73 17H28v-4.97h2V29c0 1.05-1 2-2 2H4c-1.05 0-2-1-2-2V3c0-1.05 1-2 2-2h15zM4 19v10h24V19H4zm8.5-12a2.5 2.5 0 0 0-1.15 4.72l.15.07v1.8A5.5 5.5 0 0 0 7.37 17h10.25a5.51 5.51 0 0 0-3.9-3.36l-.22-.05v-1.8a2.5 2.5 0 0 0-1-4.79zM28 1h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19c-1.06 1.7-1.44 2.68-1.48 4.15V12h-2c0-2.16.52-3.47 1.95-5.73l.57-.88c1.06-1.7 1.44-2.68 1.47-4.15V1zm-5 0h2c0 2.06-.48 3.34-1.77 5.42l-.75 1.19c-1.06 1.7-1.44 2.68-1.48 4.15V12h-2c0-2.16.52-3.47 1.95-5.73l.57-.88c1.06-1.7 1.44-2.68 1.47-4.15V1z"></path>
    </svg>
  );
};
