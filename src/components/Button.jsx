import { forwardRef } from "react";
import Link from "next/link";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      className = "",
      width = "",
      height = "",
      disabled = false,
      onClick,
      link = "/",
      classNames = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "text-base font-bold inline-flex items-center justify-center  rounded-[8px] transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-green text-white hover:bg-[#176221] focus:ring-[#176221] font-bold ",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 ",
      greenBlue: "bg-[#002422] text-white ",
      danger: "bg-red-600 text-white hover:bg-red-700 ",
      warning: "bg-yellow-600 text-white hover:bg-yellow-700 ",
      outline:
        "border-2 border-green text-green hover:bg-green hover:text-white focus:ring-green",
      ghost:
        "bg-white/8 backdrop-blur-5px rounded-8px font-bold border-1 border-white/8 hover:border-white",
    };

    const classes = `${baseClasses} ${variants[variant]}  ${className} ${classNames}`;

    if (link && link !== "/") {
      return (
        <Link
          href={link}
          className={classes}
          style={{
            width: width,
            height: height,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
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
    );
  }
);

Button.displayName = "Button";

export default Button;
