import React, { useState, useEffect, forwardRef } from "react";

const DropDown = (
  {
    list = [],
    labelField,
    hovered,
    onHover = () => {},
    onItemClicked = () => {}
  },
  ref
) => {
  const [currentHover, setCurrentHover] = useState(hovered);
  useEffect(() => {
    setCurrentHover(hovered);
  }, [hovered]);
  return (
    <div
      style={{ position: "absolute", backgroundColor: "#ffffff" }}
      ref={ref}
      onMouseOver={() => (ref.current.mouseOver = true)}
      onMouseOut={() => (ref.current.mouseOver = false)}
    >
      {list.map(item => (
        <a
          href="#clickItem"
          style={{
            display: "block",
            color: "#222",
            backgroundColor: currentHover === item.Id ? "#ccc" : ""
          }}
          onMouseOver={() => {
            setCurrentHover(item.Id);
            onHover(item.Id);
          }}
          key={item.Id}
          onClick={e => {
            e.preventDefault();

            onItemClicked(item);
          }}
        >
          {item[labelField]}
        </a>
      ))}
    </div>
  );
};

export default forwardRef(DropDown);
