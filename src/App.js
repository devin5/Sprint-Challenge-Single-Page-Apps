import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom"; 
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList.js";




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
     
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Character" component={CharacterList} />
      <Route path="/Location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />

      
      
    </main>

    
  );
}