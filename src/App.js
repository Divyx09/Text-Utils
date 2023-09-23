import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
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
    }, 1500);
  };
  return (
    <Router>
      <>
        <Navbar
          title="TextUtilitis"
          mode={mode}
          toggleMode={
            toggleMode
          } /*toggleContrast={toggleContrast} contrast={contrast}*/
        />
        {/* <Navbar></Navbar> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
              
            </Route>
            <Route excat path="/"
            element={<TextForm
                showAlert={showAlert}
                heading="Enter Your Text To Analyse it."
                mode={mode}
              ></TextForm>}>
              
            </Route>
            <Route excat path="/contact"
            element={<ContactUs mode={mode}/>}>
            </Route>

          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
