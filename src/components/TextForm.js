import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpText = () => {
    // console.log("UpperCase Was Pressed" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");
  };
  const handleLoText = () => {
    // console.log("UpperCase Was Pressed" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  };
  const handleChange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
  };
  const cleartext = (event) => {
    // console.log("On Changed");
    setText("");
    props.showAlert("Text Cleared !!", "success");
  };

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied To Clipboard", "success");
  };

  const handelUndo=()=>{
    console.log("handleUndo");
  }
  const handleRedo=()=>{
    console.log("handleRedo");
  }
  const capitalize = () => {
    const titleCase = text
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

   setText(titleCase);
}

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Lisening To your Text..... ", "success");
  };

  const paste = () => {
    let text = document.getElementById("mybox");
    navigator.clipboard.readText().then(
        (text.innerText = text),
      (err) => console.log(err)
    );
  };

  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-primary mt-2" onClick={handleUpText}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mt-2 mx-3" onClick={handleLoText}>
          Convert To Lowercase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-3 mt-2"
        >
          Speak
        </button>
        <button
          type="submit"
          onClick={handelCopy}
          className="btn btn-success mx-3 mt-2"
        >
          Copy
        </button>
        <button
          type="submit"
          onClick={cleartext}
          className="btn btn-danger mx-3 mt-2"
        >
          ClearText
        </button>
        <button
          type="submit"
          onClick={capitalize}
          className="btn btn-primary mx-3 mt-2"
        >
          Capitalize First-Word
        </button>
        <button
          type="submit"
          onClick={paste}
          className="btn btn-secondary mx-3 mt-2"
        >
          Paste From ClipBoard
        </button>
        <button
          type="submit"
          onClick={handleRedo}
          className="btn btn-info mx-3 mt-2"
        >
          Undo
        </button>
        <button
          type="submit"
          onClick={handelUndo}
          className="btn btn-info mx-3 mt-2"
        >
          Redo
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <div
        className="container rounded text-justify"
        style={{
          color: props.mode === "light" ? "black" : "white",
          border: "2px solid ",
        }}
      >
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the above TextBox To preview It"}
        </p>
      </div>
    </div>
  );
}
