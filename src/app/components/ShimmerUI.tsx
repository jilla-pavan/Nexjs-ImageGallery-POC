import React from "react";

const ShimmerUI: React.FC = () => {
  return (
    <div className="grid grid-cols-5 ml-6">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="m-4 bg-slate-300 w-[200px] h-[200px] rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default ShimmerUI;
