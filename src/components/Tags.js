import React from "react";

const Tags = () => {
  const tags = ["Clutch", "Fabric lining", "Baggit", "Multi"];

  return (
    <>
      <div style={{ color: "#949494", fontSize: "12px", marginBottom: "5px" }}>
        Popular tags for handbag
      </div>
      <div>
        {tags.map((tag, index) => (
          <button
            key={index}
            style={{
              backgroundColor: "#F2F7FF",
              padding: "5px 8px",
              borderRadius: "5px",
              color: "#4C82EF",
              border: "1px solid #4C82EF",
              marginRight: "10px",
              fontSize: "10px",
              fontWeight: "500",
            }}
          >
            {tag}
          </button>
        ))}
        <span
          style={{
            backgroundColor: "white",
            padding: "10px",
            color: "#4C82EF",
            position: "absolute",
            marginLeft: "-20px",
          }}
          class="fa fa-chevron-right"
        />
      </div>
    </>
  );
};

export default Tags;
