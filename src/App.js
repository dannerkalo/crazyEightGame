import React from "react";
import CardSuitsContextProvider from "./context/CardSuitsContext";
import PlayerContextProvider from "./context/PlayerContext";
import PlayerComponent from "./component/PlayerComponent";

function App() {
  return (
    <CardSuitsContextProvider>
      <PlayerContextProvider>
        <PlayerComponent />
      </PlayerContextProvider>
    </CardSuitsContextProvider>
  );
}

export default App;
