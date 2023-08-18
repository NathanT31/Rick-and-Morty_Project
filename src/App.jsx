import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";

import { SearchContextProvider } from "./scripts/SearchContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import Home from "./pages/Home";
import NavBar from "./components/Navbar/Navbar";
import PrincipalContentLayout from "./layouts/PrincipalContentLayout";
import CharactersController from "./controllers/CharactersController";
import LocationsController from "./controllers/LocationsController";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <SearchContextProvider>
          <div className="bg-zinc-100 text-zinc-800">
            <NavBar></NavBar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/characters/:page?"
                element={
                  <PrincipalContentLayout>
                    <CharactersController />
                  </PrincipalContentLayout>
                }
              />
              <Route
                path="/locations/:page?"
                element={
                  <PrincipalContentLayout>
                    <LocationsController />
                  </PrincipalContentLayout>
                }
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </SearchContextProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
