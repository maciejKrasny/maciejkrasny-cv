import React, { FunctionComponent } from "react";
import { ListElement } from "../styles/SkillsList.styles";

export interface SkillsListProps {
  elements?: string[];
}

const SkillsList: FunctionComponent<SkillsListProps> = props => {
  const elements = props.elements?.map((element: string) => {
    return <ListElement key={element}>{element}</ListElement>;
  });
  return <ul>{elements}</ul>;
};

export default SkillsList;
