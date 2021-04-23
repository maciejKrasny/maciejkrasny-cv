import React, { FunctionComponent } from "react";
import AboutMeCard from "./AboutMeCard";
import TimeLine from "./TimeLine";
import {
  BoardContainer,
  StyledBoard
} from "../styles/Board.styles";
import {
  aboutMeElements,
  educationTimeLineElements,
  experienceTimeLineElements,
  projectsTimeLineElements
} from "./Data";

const Board: FunctionComponent= () => {
  return (
    <BoardContainer>
      <StyledBoard>
        <AboutMeCard {...aboutMeElements} />
        <TimeLine
          title="Doświadczenie"
          icon="work"
          elements={experienceTimeLineElements}
        />
        <TimeLine
          title="Edukacja"
          icon="school"
          elements={educationTimeLineElements}
        />
        <TimeLine
          title="Moje projekty"
          icon="school"
          elements={projectsTimeLineElements}
        />
      </StyledBoard>
    </BoardContainer>
  );
};

export default Board;
