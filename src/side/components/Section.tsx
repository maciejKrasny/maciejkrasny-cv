import React, { FunctionComponent } from "react";
import { Title, SectionContent } from "../styles/Section.styles";

export interface SectionProps {
  title?: string;
}

const Section: FunctionComponent<SectionProps> = props => {
  return (
    <>
      <Title>{props.title}</Title>
      <SectionContent>{props.children}</SectionContent>
    </>
  );
};

export default Section;
