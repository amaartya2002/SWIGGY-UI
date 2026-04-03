import React from "react";
import ReactDOM from "react-dom/client"


const ele = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { className: "heading-row", key: 1 }, "This is a heading"),
  React.createElement("p", { className: "para", key: 2 }, "This is a paragraph...")
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(ele)