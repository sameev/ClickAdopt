import React from "react";
import { createRoot } from "react-dom/client"

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

//grab the root div out of the HTML document (typically given an ID of 'root')
const container = document.getElementById("root");
//take element above and pass it into createRoot to signal to React where we want it to render our application from
const root = createRoot(container);
//on root, we invoke the render method which takes in an INSTANCE of App as a parameter. (hence why we use React.createElement again)
root.render(React.createElement(App));
