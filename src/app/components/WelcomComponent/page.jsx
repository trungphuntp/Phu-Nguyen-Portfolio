import React from "react";

const WelcomComponent = ({ maintext = "", subtext = "" }) => {
  return (
    <div className="writetextcontainer">
      <p>{subtext}</p>
      <p>{maintext}</p>
    </div>
  );
};

export default WelcomComponent;
