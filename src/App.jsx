import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import { SearchContextProvider } from "./scripts/SearchContext";

import Home from "./pages/Home";
import NavBar from "./components/Navbar/Navbar";
import Page404 from "./pages/Page404";
import CharactersController from "./controllers/CharactersController";
import LocationsController from "./controllers/LocationsController";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-zinc-800">
      <Router>
        <SearchContextProvider>
          <NavBar></NavBar>
          <div className="flex flex-col container mx-auto p-6 place-content-center">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/characters/:page?"
                element={<CharactersController />}
              />
              <Route
                path="/locations/:page?"
                element={<LocationsController />}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </SearchContextProvider>
      </Router>
    </div>
  );
}

export default App;
