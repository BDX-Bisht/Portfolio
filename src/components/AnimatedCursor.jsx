import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      innerScale={2}
      outerScale={2}
      outerStyle={{
        border: "1px solid #9399b3",
        backgroundColor: "transparent",
      }}
      innerStyle={{
        backgroundColor: "#9399b3",
      }}
      trailingSpeed={8}
    />
  );
};

export default Cursor;
