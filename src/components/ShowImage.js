import React, { useState } from "react";
import sizeChanger from "./sizeChanger";

export default function ShowImage({ image }) {
  return (
    <div className="imgContainer">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: 'inherit',
          height: 'inherit',
          
        }}
      ></div>

    </div>
  );
}
