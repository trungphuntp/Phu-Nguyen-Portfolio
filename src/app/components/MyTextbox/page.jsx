import React from "react";

const MyTextbox = ({ title, desc, className = "", ...rest }) => {
  return (
    <div className={`textbox ${className}`} {...rest}>
      <span className="sub-heading">{desc}</span>
      <h2 className="h2-heading">{title}</h2>
    </div>
  );
};

export default MyTextbox;
