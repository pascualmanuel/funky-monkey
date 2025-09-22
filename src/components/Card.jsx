const Card = ({
  children,
  className = "",
  hover = false,
  padding = "medium",
  ...props
}) => {
  const baseClasses =
    "bg-white rounded-lg shadow-md transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : "";

  const paddingClasses = {
    none: "p-0",
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-semibold text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
