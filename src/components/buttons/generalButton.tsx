type ButtonProps = {
    text: string;
    handleClick?: () => void;
    hoverBgWhite?: boolean;
    type?: "button" | "submit" | "reset";
    disabled?: boolean; 
};

export const GeneralButton: React.FC<ButtonProps> = ({
    text,
    handleClick,
    hoverBgWhite = true,
    type = "button",
}) => {
    return (
        <button
            onClick={handleClick}
            type={type}
            className={`h-auto focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 transition-colors duration-300 ease-in-out
                text-black bg-primary_button
                ${hoverBgWhite ? "hover:bg-white" : "hover:bg-primary hover:text-white"}`}
        >
            {text}
        </button>
    );
};
