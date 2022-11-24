/**
 *
 * What is JSX?
 * Superpowers  of JSX?
 *
 * Coding :
 * - Create a nested Component using CreateElement
 * - Do the same thing using JSX
 * - Passing attritutes in JSX
 * - Composition of components
 * - {TitleComponent}
 *
 * - Create a header component
 *  - Logo
 *  - Search Bar in between
 *  - User Icon
 *
 */

import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1>Namaste JavaScript Bootcamp</h1>;

const HeadingComponent = () => (
  <div id="title" className="title-class" tabIndex="1">
    <TitleComponent />

    <h2>from Zero to Hero</h2>
    <h3>in months</h3>
  </div>
);

// JSX -> React.createElement -> Object -> DOM(h1)

// const HeadComponent = () => {
//   return React.createElement("h1", { id: "title" }, "Hello World Component");
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
