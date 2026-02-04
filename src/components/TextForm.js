import React, { useState } from "react";
import styles from "../styles/components/TextForm.module.css";

export default function TextForm(props) {
  const handleUpText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");
  };
  
  const handleLoText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  };
  
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  const cleartext = () => {
    setText("");
    props.showAlert("Text Cleared !!", "success");
  };

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied To Clipboard", "success");
  };

  const capitalize = () => {
    const titleCase = text
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
    setText(titleCase);
    props.showAlert("Text Capitalized", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listening To your Text..... ", "success");
  };

  const paste = async () => {
    try {
      const cliptext = await navigator.clipboard.readText();
      setText(cliptext);
      props.showAlert("Text Pasted from Clipboard", "success");
    } catch (err) {
      console.log(err);
      props.showAlert("Failed to paste text", "error");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");

  const wordCount = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;

  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className={styles.textForm}>
      <div className="container">
        <div className={styles.card}>
          <h1 className={styles.heading}>{props.heading}</h1>

          <div className={styles.textareaSection}>
            <textarea
              className={styles.textarea}
              id="mybox"
              rows="8"
              value={text}
              onChange={handleChange}
              placeholder="Enter your text here..."
            ></textarea>
          </div>

          <div className={styles.buttonGroups}>
            <div className={styles.buttonGroup}>
              <span className={styles.buttonGroupLabel}>Text Transformation</span>
              <div className={styles.buttons}>
                <button 
                  className={`${styles.button} ${styles.buttonPrimary}`} 
                  onClick={handleUpText}
                >
                  <span>📤</span> Uppercase
                </button>
                <button 
                  className={`${styles.button} ${styles.buttonPrimary}`} 
                  onClick={handleLoText}
                >
                  <span>📥</span> Lowercase
                </button>
                <button 
                  className={`${styles.button} ${styles.buttonPrimary}`} 
                  onClick={capitalize}
                >
                  <span>✨</span> Capitalize
                </button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <span className={styles.buttonGroupLabel}>Clipboard Operations</span>
              <div className={styles.buttons}>
                <button 
                  className={`${styles.button} ${styles.buttonSecondary}`} 
                  onClick={handelCopy}
                >
                  <span>📋</span> Copy
                </button>
                <button 
                  className={`${styles.button} ${styles.buttonInfo}`} 
                  onClick={paste}
                >
                  <span>📌</span> Paste
                </button>
                <button 
                  className={`${styles.button} ${styles.buttonDanger}`} 
                  onClick={cleartext}
                >
                  <span>🗑️</span> Clear
                </button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <span className={styles.buttonGroupLabel}>Text Tools</span>
              <div className={styles.buttons}>
                <button 
                  className={`${styles.button} ${styles.buttonWarning}`} 
                  onClick={speak}
                >
                  <span>🔊</span> Speak
                </button>
                <button 
                  className={`${styles.button} ${styles.buttonDanger}`} 
                  onClick={handleExtraSpaces}
                >
                  <span>✂️</span> Remove Extra Spaces
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statistics}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📝</div>
            <div className={styles.statValue}>{wordCount}</div>
            <div className={styles.statLabel}>Words</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔤</div>
            <div className={styles.statValue}>{charCount}</div>
            <div className={styles.statLabel}>Characters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏱️</div>
            <div className={styles.statValue}>{readingTime}</div>
            <div className={styles.statLabel}>Minutes Read</div>
          </div>
        </div>

        <div className={styles.previewSection}>
          <h2 className={styles.previewHeading}>
            <span>👁️</span> Preview
          </h2>
          <p className={text.length > 0 ? styles.previewText : styles.previewPlaceholder}>
            {text.length > 0
              ? text
              : "Enter something in the above TextBox to preview it"}
          </p>
        </div>
      </div>
    </div>
  );
}
