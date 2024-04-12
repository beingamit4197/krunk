import React from "react";

const MessageCard = ({
  bgColor,
  secondBgColor,
  children,
  ml,
  mr,
  sentTime,
  timePosition,
}) => {
  const cardStyle = {
    maxWidth: "200px",
    borderRadius: "20px",
    backgroundImage: bgColor,
    backgroundColor: secondBgColor,
    padding: "10px",
    marginLeft: ml,
    marginRight: mr,
    fontSize: "13px",
  };

  const timeStyle = {
    fontSize: "10px",
    marginLeft: timePosition === "left" ? "30px" : "auto",
    textAlign: timePosition === "right" ? "end" : "auto",
    marginRight: timePosition === "right" ? "30px" : "auto",
  };

  return (
    <>
      <div style={cardStyle}>{children}</div>
      <p style={timeStyle}>{sentTime}</p>
    </>
  );
};

export default MessageCard;
