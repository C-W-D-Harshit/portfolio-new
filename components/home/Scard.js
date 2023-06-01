import React from "react";

const Scard = ({ icon, text }) => {
  return (
    <div className="scard">
      {icon}
      <p style={{ marginLeft: "1rem" }}>{text}</p>
    </div>
  );
};

export default Scard;
