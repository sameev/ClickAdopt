import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import SearchParams from "./SearchParams.js";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";
import { Pet } from "./APIResponsesTypes.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as Pet | null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};

//grab the root div out of the HTML document (typically given an ID of 'root')
const container = document.getElementById("root");
if (!container) {
  throw new Error("No container to render to");
}

//take element above and pass it into createRoot to signal to React where we want it to render our application from
const root = createRoot(container);
//on root, we invoke the render method which takes in an INSTANCE of App as a parameter. (hence why we use React.createElement again)
root.render(<App />);
