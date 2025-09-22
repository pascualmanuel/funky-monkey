import { forwardRef } from "react";
import Link from "next/link";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      className = "",
      width = "",
      height = "",
      disabled = false,
      onClick,
      link = "/",
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "text-base font-bold inline-flex items-center justify-center  rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-green text-white hover:bg-[#176221] focus:ring-[#176221] font-bold ",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      warning:
        "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500",
      outline:
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    };

    const classes = `${baseClasses} ${variants[variant]}  ${className}`;

    return (
      <Link href={link} style={{ textDecoration: "none" }}>
        <button
          ref={ref}
          type={type}
          className={classes}
          disabled={disabled}
          onClick={onClick}
          style={{
            width: width,
            height: height,
          }}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }
);

Button.displayName = "Button";

export default Button;
