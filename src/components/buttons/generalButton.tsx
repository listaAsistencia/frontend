type ButtonProps = {
    text: string,
    handleClick: () => void;
    hoverBgWhite?: boolean;
}

export const GeneralButton: React.FC<ButtonProps> = ({text, handleClick, hoverBgWhite = true}) => {
    return (
    <button
      onClick={handleClick}
      type="button"
      className={`focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-300 ease-in-out
        text-black bg-primary_button
        ${hoverBgWhite ? "hover:bg-white" : "hover:bg-primary hover:text-white"}`}
    >
            {text}
    </button>
    );
}