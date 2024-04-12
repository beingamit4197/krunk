import React from "react";
import logo from "../images/Logo.png";

const MessageBox = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#E3ECFF",
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#E3ECFF",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
            padding: "10px",
          }}
        >
          <div style={{ position: "relative", flex: "1" }}>
            <input
              type="text"
              placeholder="Type your message"
              style={{
                padding: "8px",
                borderRadius: "10px",
                border: "2px solid #fff",
                paddingRight: "30px",
                width: "80%",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                fontSize: "20px",
                color: "#aaa",
              }}
              className="fa fa-paperclip"
            />
          </div>
          <button
            style={{
              backgroundColor: "#4C82EF",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            <i style={{ fontSize: "20px" }} className="fa fa-chevron-right" />
          </button>
        </div>
        <div
          style={{
            color: "#B1B1B1",
            textAlign: "center",
            padding: "3px",
          }}
        >
          Powered by{" "}
          <strong>
            Krunk.ai <img alt="" src={logo} />
          </strong>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
