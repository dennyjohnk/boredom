import React from "react";
import Rainbow from "../components/hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About page</h4>
      <p>this is a test</p>
    </div>
  );
};

export default Rainbow(About);
