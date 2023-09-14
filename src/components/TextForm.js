import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpText = () => {
    // console.log("UpperCase Was Pressed" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase","success")
  };
  const handleLoText = () => {
    // console.log("UpperCase Was Pressed" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase","success")
  };
  const handleChange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
    
  };
  const cleartext = (event) => {
    // console.log("On Changed");
    setText("");
    props.showAlert("Text Cleared !!","success")
  };

  const handelCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied To Clipboard","success")

  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Lisening To your Text..... ","success")

  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <textarea
          style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}}
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
      </div>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <div className="container rounded text-justify" style={{color:props.mode==='light'?'black':'white',border:'2px solid '}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the above TextBox To preview It'}</p>
      </div>
    </div>
  );
}
