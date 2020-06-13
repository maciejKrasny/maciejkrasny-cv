import React, { FunctionComponent } from "react";
import PortraitImage from "./PortraitImage";
import NameTitle from "./NameTitle";
import NameImageContainer from "./NameImageContainer";
import SideSection from "./Section";
import InformationText from "./InformationText";
import SkillsList from "./SkillsList";
import { StyledSideMainElement } from "../styles/SideMainElement.styles";

const skills: string[] = [
  "JavaScript, TypeScript",
  "React, React Native",
  "NodeJS, NestJS",
  "Kotlin",
  "GraphQl",
  "Css",
  "Html",
  "Java, Spring",
  "Python",
  "Sql",
  "C, C++"
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
        <SkillsList elements={skills} />
      </SideSection>
    </StyledSideMainElement>
  );
};

export default SideMainElement;
