import { createRoot } from "react-dom/client";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

//grab the root div out of the HTML document (typically given an ID of 'root')
const container = document.getElementById("root");
//take element above and pass it into createRoot to signal to React where we want it to render our application from
const root = createRoot(container);
//on root, we invoke the render method which takes in an INSTANCE of App as a parameter. (hence why we use React.createElement again)
root.render(<App />);
