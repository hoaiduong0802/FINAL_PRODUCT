import React from "react";

const Checkbox = ({label,checked,onChange, id}) => {
  return (
    <div className="filter-items filter-items-count">
      <div className="filter-item">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={id} checked={checked} onChange={onChange}/>
          <label className="custom-control-label" htmlFor={id}>
            {label || ""}
          </label>
        </div>
        {/* <span className="item-count">{name?.quality ? name.quality : 0}</span> */}
      </div>
    </div>
  );
};

export default Checkbox;
