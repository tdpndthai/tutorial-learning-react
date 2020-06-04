import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        Im {props.name} person and im {props.age}
      </p>
      {/* truyền gì vào giữa là qua props.children sẽ nhận */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;
