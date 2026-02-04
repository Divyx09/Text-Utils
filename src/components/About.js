import React from "react";
import styles from "../styles/components/About.module.css";

export default function About(props) {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>About Text-Utils</h1>
          <p className={styles.subtitle}>
            Fast, reliable, and easy! Text-Utils brings several free online tools to assist you in daily tasks.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Fast & Efficient</h3>
            <p className={styles.featureDescription}>
              Process your text instantly with our optimized algorithms. No waiting, no delays - just instant results.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🆓</div>
            <h3 className={styles.featureTitle}>Free To Use</h3>
            <p className={styles.featureDescription}>
              It is completely free to use. No credit cards required. Use as much as you want without any limitations!
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3 className={styles.featureTitle}>Browser Compatible</h3>
            <p className={styles.featureDescription}>
              Works seamlessly on all modern browsers. Access Text-Utils from any device, anywhere, anytime.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3 className={styles.featureTitle}>Multiple Tools</h3>
            <p className={styles.featureDescription}>
              Convert case, remove spaces, copy text, and much more. All the text manipulation tools you need in one place.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3 className={styles.featureTitle}>Modern UI</h3>
            <p className={styles.featureDescription}>
              Clean and intuitive interface with light and dark themes. Enjoy a pleasant user experience while working with text.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3 className={styles.featureTitle}>Privacy First</h3>
            <p className={styles.featureDescription}>
              All processing happens in your browser. Your text never leaves your device, ensuring complete privacy.
            </p>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Why Choose Text-Utils?</h2>
          <p className={styles.infoText}>
            Text-Utils provides free tools to help you with your daily tasks. You will find tools for formatting text, 
            converters, tools for handling text such as removing duplicate characters, empty lines, text sorting, and many others. 
            Check the current features and feel free to recommend a new feature by <span className={styles.highlight}>contacting us</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
