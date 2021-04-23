import React from "react";
import SideMainElement from "./side/components/SideMainElement";
import Board from "./board/components/Board";
import { StyledMain } from "./App.styles";

function App() {
  return (
    <StyledMain>
      <SideMainElement />
      <Board />
    </StyledMain>
  );
}

export default App;
