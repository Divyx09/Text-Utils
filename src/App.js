import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  // Apply theme to body element
  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <Router>
      <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="app-content">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/"
              element={<TextForm
                showAlert={showAlert}
                heading="Enter Your Text To Analyse it."
                mode={mode}
              />}
            />
            <Route exact path="/contact"
              element={<ContactUs mode={mode}/>}
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
