import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { ProfileContext } from "./contexts/ProfileContext";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import HomePage from "./pages/HomePage/HomePage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import Searcher from "./pages/Searcher/Searcher";

const profileDefault = {
  "name": "Favorite",
  "species": "Character",
  "image": "https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643665615/Rick%20y%20morty/rick-sanchez_iqxnxt.png",
  }

function App() {

  const [profile, setProfile] = useState(profileDefault)
  return (
    <div className="div-app">
    
      <BrowserRouter>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="search" element={<Searcher/>}/>
          </Route>
        </Routes>
      </ProfileContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
