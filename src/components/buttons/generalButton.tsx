type ButtonProps = {
    text: string,
    handleClick: () => void;
}

export const GeneralButton: React.FC<ButtonProps> = ({text, handleClick}) => {
    return (
        <button 
        onClick={handleClick}
        type="button" className="focus:outline-none text-black bg-primary_button hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-300 ease-in-out">
            {text}
        </button>
    );
}