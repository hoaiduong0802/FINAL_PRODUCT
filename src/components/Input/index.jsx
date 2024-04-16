import { forwardRef } from "react";

export const Input = forwardRef(
  (
    { label, required, error, renderInput = undefined, name = "", ...rest },
    ref
  ) => {
    return (
      <div className="form-group">
        <label className="label" htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
        {renderInput?.(rest, ref) || (
          <input
            ref={ref}
            className={`form-control ${!!error ? "input-error" : ""}`}
            name={name}
            id={name}
            {...rest}
          />
        )}
        <p className="form-error" style={{ minHeight: 23 }}>
          {error || ""}
        </p>
      </div>
    );
  }
);

export default forwardRef(Input)
