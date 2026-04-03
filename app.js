import React from "react";
import ReactDOM from "react-dom/client"


const ele = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { className: "heading-row", key: 1 }, "This is a heading"),
  React.createElement("p", { className: "para", key: 2 }, "This is a paragraph...")
])

/**
 * React.createElement() is a JS object.
 * But when we render this JS object on to the DOM it becomes htmlElement
 */

// Create React element using jsx

const jsxElement = <h1 id="jsx-heading">This is a jsx syntax to create react element</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxElement)