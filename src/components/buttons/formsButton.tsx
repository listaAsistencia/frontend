import React from "react";
import { GeneralButton } from "./generalButton";
type FormButtonProps={
    text: string;
  isLoading?: boolean;
  disabled?: boolean;
  hoverBgWhite?: boolean;
  className?: string;
}

export const FormButton:React.FC<FormButtonProps>=({
    text,
  isLoading = false,
  disabled = false,
  hoverBgWhite = false,
  className = "",
})=>{
    return (
    <GeneralButton
      type="submit"
      text={isLoading ? "Procesando..." : text}
      disabled={disabled || isLoading}
      hoverBgWhite={hoverBgWhite}
      className={className}
    />
  );

}