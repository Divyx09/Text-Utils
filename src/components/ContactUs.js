import React from "react";
import styles from "../styles/components/ContactUs.module.css";

export default function ContactUs(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Form submitted! (This is a demo)");
  };

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have a question or suggestion? We'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={styles.input}
                  placeholder="+1 (123) 456-7890"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="state" className={styles.label}>
                State/Region
              </label>
              <input
                type="text"
                id="state"
                className={styles.input}
                placeholder="Enter your state or region"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="Tell us what's on your mind..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
