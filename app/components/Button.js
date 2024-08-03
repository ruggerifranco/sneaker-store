const Button = ({
    onClick,
    className = "",
    style = {},
    children,
    type = "button",
    disabled = false
  }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
        style={style}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  