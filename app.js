import React from "react";
import ReactDOM from "react-dom/client"


const ele = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { className: "heading-row", key: 1 }, "This is a heading"),
  React.createElement("p", { className: "para", key: 2 }, "This is a paragraph...")
])

console.log(ele);

/**
 * React.createElement() is a JS object.
 * But when we render this JS object on to the DOM it becomes htmlElement
 */

// Create React element using jsx syntax

/**
 const jsxHeading = <h1 id="jsx-heading">This is a jsx syntax to create react element</h1>

const jsxAnchor = <a href="#">This is an anchor link</a>

const jsxImg = <img src="#" alt="theres-no-img"></img>

console.log(jsxHeading);
 */

const Title = () => <h1>This is the title</h1>

const title = <h1>This is the title of the jsx element</h1>

const HeadingComponent = () => {
  return <div>
    <Title />
    {title}
    {Title()}
    <h1 className="heading">This is a heading element inside a heading Component</h1>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)