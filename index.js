import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles.css"; // ✅ This is correct if the file exists in src/
                        // ❌ Remove './index.css' if you don't have that file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
