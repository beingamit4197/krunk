import React from "react";
import "./PhoneLayout.css";
import ChatHeader from "./ChatHeader";
import MessageCard from "./MessageCard";
import Tags from "./Tags";
import bag from "../images/bag.png";
import vector from "../images/Vector.png";
import Filter from "./Filter";
import MessageBox from "./MessageBox";
import Space from "./Space";

const PhoneLayout = () => {
  return (
    <div className="phone-box">
      <ChatHeader />
      <Space />
      <div
        style={{
          margin: "15px",
        }}
      >
        <MessageCard
          sentTime={"4:45 PM"}
          bgColor="linear-gradient(to right, #e5eeff, #edf2ff, #f4f6ff, #fafaff)"
          timePosition="left"
        >
          Hi Sam! I am your personal shopping assistant, how can I help you
          today?
        </MessageCard>
        <MessageCard
          sentTime={"4:46 PM"}
          secondBgColor={"#DCF7C5"}
          ml={"auto"}
          timePosition="right"
        >
          I am looking for a hand bag with a long strap.
        </MessageCard>
        <Space />
        <Tags />
        <Space />
        <MessageCard
          sentTime={"4: 48 PM"}
          timePosition="left"
          bgColor="linear-gradient(to right, #e5eeff, #edf2ff, #f4f6ff, #fafaff)"
        >
          <MessageCard
            secondBgColor={"white"}
            style={{ display: "flex", padding: "auto", alignItems: "center" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
              }}
            >
              <img src={bag} alt="" />
              <div style={{ marginLeft: "10px" }}>
                <div style={{ fontSize: "10px" }}>
                  Bags on Timpu{" "}
                  <span>
                    <img src={vector} alt="" />
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#949494",
                  }}
                >
                  1123 products{" "}
                  <span
                    style={{ marginLeft: "10px", fontSize: "15px" }}
                    class="fa fa-chevron-right"
                  />
                </div>
              </div>
            </div>
          </MessageCard>
          <p style={{ fontSize: "12px" }}>
            Or set filter and help us choose the best bag for you.
          </p>
        </MessageCard>
        <Filter />
      </div>
      <Space />
      <MessageBox />
    </div>
  );
};

export default PhoneLayout;
