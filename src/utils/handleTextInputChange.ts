import { ChangeEvent } from "react";

// Handle changes in text input fields and updates the corresponding state
export const handleTextInputChange = <T extends { [key: string]: string }>(
  e: ChangeEvent<HTMLInputElement>,
  setStateFunction: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value } = e.target;
  setStateFunction((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
