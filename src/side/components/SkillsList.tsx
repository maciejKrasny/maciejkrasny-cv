import React, { FunctionComponent } from "react";
import { ListElement, Category } from "../styles/SkillsList.styles";

export interface Skills {
  category: string;
  elements: string[];
}

export interface SkillsListProps {
  skills?: Skills[];
}

const SkillsList: FunctionComponent<SkillsListProps> = ({ skills }) => {
    const skillsWithCategories =  skills?.map((skill) => {
        const elements = skill.elements.map((element) => <ListElement key={element}>{element}</ListElement>);
        return (
            <>
                <Category>{skill.category}</Category>
                <ul>{elements}</ul>
            </>
        );
    });

    return (
        <>
            {skillsWithCategories}
        </>
    )
};

export default SkillsList;
