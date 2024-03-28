import { useState } from 'react';

// Custom hook for input fields to handle the state and change events when the user types in the input field and to reset the input field
export const useInputField = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');

  };
  return [value, handleChange, reset];
};
