import React from "react";

const MyIcon = ({ link = "/", className, children, ...rest }) => {
  return (
    <a
      href={link}
      className={`icon black ${className}`}
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export default MyIcon;
