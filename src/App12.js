import React from "react";

export default function App12(props) {
  let name = props.name;
  let age = props.age
  return <div>{name}-{age}</div>;
}

App12.defaultProps = {
  name: "Cathy",
  age:22
};
