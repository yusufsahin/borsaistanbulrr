import React from "react";
import ChildComponent from "../app/ChildComponent";

const ParentComponent = () => {
  const handleData = (childData) => {
    console.log("Çocuktan gelen veri : ", childData);
  };

  return (
    <div>
      <p>****ParentComponent****</p>
      <ChildComponent sendData={handleData} />
    </div>
  );
};

export default ParentComponent;
