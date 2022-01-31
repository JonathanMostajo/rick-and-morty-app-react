import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import HomePage from "./pages/HomePage/HomePage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import Searcher from "./pages/Searcher/Searcher";

function App() {
  return (
    <div className="div-app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="search" element={<Searcher/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
