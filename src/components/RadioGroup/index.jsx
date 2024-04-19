import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";

const RadioCustomGroup = styled.div`
  display: flex;
  align-items: center;
  padding: unset;
  column-gap: 8px;
`;
const RadioContext = createContext();
const RadioGroup = ({
  defaultValue,
  disabled,
  className,
  onChange,
  children,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onCheckChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onChange?.(value);
  };
  return (
    <RadioContext.Provider
      value={{ value, disabled, onCheckChange }}
      className={`radio-group ${className}`}
    >
      {children}
    </RadioContext.Provider>
  );
};

const RadioItem = ({ children, disabled = false, value }) => {
  const { value: selectedValue, onCheckChange } = useContext(RadioContext);
  return (
    <RadioCustomGroup
      className="custom-control custom-radio"
      
    >
      <input
        className="custome-control-input"
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={selectedValue === value}
        disabled={disabled}
        onChange={onCheckChange}
      />
      <label
        className="custome-control-label"
        htmlFor={value}
        style={{ cursor: "pointer", margin: "unset" }}
      >
        {children}
      </label>
    </RadioCustomGroup>
  );
};

RadioGroup.Item = RadioItem;

export default RadioGroup;
