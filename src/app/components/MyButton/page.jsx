import React from "react";

const MyButton = ({
  linkin,
  linkout,
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  let classBtn;

  switch (variant) {
    case "outline":
      classBtn = `btn outline ${className}`;
      break;
    case "primary":
      classBtn = `btn primary ${className}`;
      break;
  }
  if (!!linkin) {
    return (
      <a href={linkin} className={`${classBtn}`} {...rest}>
        {children}
      </a>
    );
  }
  if (!!linkout) {
    return (
      <a href={linkout} target="_blank" className={`${classBtn}`} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${classBtn}`} {...rest}>
      {children}
    </button>
  );
};

export default MyButton;
