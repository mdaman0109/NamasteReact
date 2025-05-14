

        import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Proper import

const newelement = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // ✅ Correct usage
root.render(newelement);
