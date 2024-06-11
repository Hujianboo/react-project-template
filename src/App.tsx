// app component
import React from "react";
import fish from "imgs/fish.png";
import "./index.css";

export const App = () => {
  return (
    <div className="flex justify-center">
      <div className="font-bold">你好</div>
      <img src={fish} className="rounded-full" />
    </div>
  );
};
