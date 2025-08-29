import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  hoverBgWhite?: boolean;
  handleClick?: () => void;
};

export const GeneralButton: React.FC<Props> = ({
  text,
  hoverBgWhite = true,
  className = "",
  disabled = false,
  handleClick,
  ...rest
}) => {
  const base = `h-auto focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 transition-colors duration-300 ease-in-out`;
  const variant = disabled
    ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-700"
    : hoverBgWhite
    ? "text-black bg-primary_button hover:bg-white"
    : "text-white bg-primary hover:bg-primary_dark";

  return (
    <button
      {...rest}
      aria-disabled={disabled}
      className={`${base} ${variant} ${className}`}
      onClick={handleClick? handleClick : undefined}
    >
      {text}
    </button>
  );
};
