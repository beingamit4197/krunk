import React from "react";

const Filter = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    color: "#949494",
    fontSize: "12px",
    marginBottom: "5px",
  };

  const tags = [
    { tag: "Strap - Long", icon: "fa fa-times", color: "#4C82EF" },
    { tag: "Colour", icon: "fa fa-times", color: "#737373" },
    { tag: "Size", icon: "fa fa-times", color: "#737373" },
    { tag: "Brand", icon: "fa fa-times", color: "#737373" },
    { tag: "Material", icon: "fa fa-times", color: "#737373" },
  ];

  return (
    <div>
      <div style={containerStyle}>
        <div>Select filters</div>
        <div>
          <i className="fa fa-sliders" />
        </div>
      </div>
      <div>
        {tags.map((tag, index) => (
          <button
            key={index}
            style={{
              backgroundColor:
                tag.tag === "Strap - Long" ? "#F2F7FF" : "#F4F4F4",
              padding: "4px 8px",
              borderRadius: "5px",
              color: tag.tag === "Strap - Long" ? tag.color : "#737373",
              border:
                tag.tag === "Strap - Long"
                  ? "1px solid #4C82EF"
                  : "1px solid #737373",
              marginRight: "10px",
              fontSize: "10px",
              fontWeight: "500",
              margin: "2px",
            }}
          >
            {tag.tag}
            <span style={{ marginLeft: "5px" }} className={tag.icon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
