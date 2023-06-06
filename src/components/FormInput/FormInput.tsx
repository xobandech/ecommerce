import "./form-input-styling.scss"
import React, { InputHTMLAttributes, FC } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const shouldShrink = otherProps.value ? "shrink" : "";  

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`form-input-label ${shouldShrink}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
