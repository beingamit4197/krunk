import React from "react";
import "./ChatHeader.css";
import chatIcon from "../images/SIMPLE CHATBOTS.png";
import vector from "../images/Vector.png";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-icon-container">
        <img className="chat-icon" src={chatIcon} alt="" />
        <div className="status-indicator">
          <div className="status-dot" />
        </div>
      </div>

      <div className="chat-info">
        <strong className="chat-name">
          Timpu
          <img className="vector-icon" src={vector} alt="" />
        </strong>
        <div>chat assistant</div>
      </div>
      <div className="online-status">
        <div className="online-dot" />
        <span className="online-text">Online</span>
      </div>
    </div>
  );
};

export default ChatHeader;
