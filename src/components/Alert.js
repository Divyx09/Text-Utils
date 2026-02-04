import React from "react";
import styles from "../styles/components/Alert.module.css";

export default function Alert(props) {
  const capitalWord = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '•';
    }
  };

  const getAlertClass = (type) => {
    switch (type) {
      case 'success':
        return styles.alertSuccess;
      case 'error':
        return styles.alertError;
      case 'warning':
        return styles.alertWarning;
      case 'info':
        return styles.alertInfo;
      default:
        return styles.alertInfo;
    }
  };

  return (
    props.alert && (
      <div className={styles.alertContainer}>
        <div className={`${styles.alert} ${getAlertClass(props.alert.type)}`}>
          <span className={styles.alertIcon}>{getAlertIcon(props.alert.type)}</span>
          <div className={styles.alertContent}>
            <div className={styles.alertTitle}>
              {capitalWord(props.alert.type)}
            </div>
            <div className={styles.alertMessage}>{props.alert.message}</div>
          </div>
        </div>
      </div>
    )
  );
}
