import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroudcolor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toogleEvent = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Text-Utilities
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Fast, reliable, and easy! Text-Utils brings several free online tools to assist developers in daily tasks.</strong> IWe
              provide free tools to help you with your daily tasks. You will
              find tools for formatting source code, converters, tools for
              handling text, such as remove duplicate characters, empty lines,
              text sorter and many others. Check the current features below and
              feel free to recommend a new feature by <code>contacting us.</code>
              </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Free To use !!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong></strong> It is completely free to use. No credit cards required. Use as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            It is compatible with all of your favorite browsers.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary my-3" onClick={toogleEvent}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
