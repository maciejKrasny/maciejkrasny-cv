import React, { FunctionComponent } from "react";
import PortraitImage from "./PortraitImage";
import NameTitle from "./NameTitle";
import NameImageContainer from "./NameImageContainer";
import SideSection from "./Section";
import InformationText from "./InformationText";
import SkillsList, { Skills } from "./SkillsList";
import { StyledSideMainElement } from "../styles/SideMainElement.styles";

const skills: Skills[] = [
    {
        category: "Zarządzanie projektami",
        elements: [
            "Zarządzanie zespołem",
            "Ustalenie wymagań",
            "Tworzenie backlogu",
            "Prioryteryzacja zadań",
            "Kontakt z klientem",
            "Scrum",
            "Agile",
            "Kanban",
            "User Stories"
        ]
    },
    {
        category: "Frontend",
        elements: [
            "JavaScript, TypeScript",
            "React, React Native",
            "Kotlin",
            "Css",
            "Html",
            "Storybook",
            "Styled-components"
        ]
    },
    {
        category: "Backend",
        elements: [
            "Java, Spring",
            "NodeJs, NestJs",
            "GraphQl",
            "SQL",
            "PostgreSQL",
            "MongoDB",
            "C, C++"
        ]
    },
    {
        category: "Narzędzia",
        elements: [
            "Git",
            "Jira",
            "Microsoft Office"
        ]
    },
    {
        category: "Inne",
        elements: [
            "Język angielski poziom B2",
        ]
    }
];

const city: string = "Poznań";
const birthDate: string = "1997-11-01";
const email: string = "maciej.krasny97@gmail.com";
const github: string = "github.com/maciejKrasny";

const SideMainElement: FunctionComponent<{}> = () => {
  return (
    <StyledSideMainElement>
      <NameImageContainer>
        <PortraitImage />
        <NameTitle />
      </NameImageContainer>
      <SideSection>
        <InformationText text={city} icon="home_work" />
        <InformationText text={birthDate} icon="cake" />
      </SideSection>
      <SideSection title="Kontakt">
        <InformationText text={email} icon="email" />
        <InformationText text={github} icon="code" isLink />
      </SideSection>
      <SideSection title="Umiejętności">
        <SkillsList skills={skills} />
      </SideSection>
    </StyledSideMainElement>
  );
};

export default SideMainElement;
