import React, { FunctionComponent } from "react";
import { StyledNameImageContainer } from "../styles/NameImageContainer.styles";

const NameImageContainer: FunctionComponent<{}> = props => {
  return <StyledNameImageContainer>{props.children}</StyledNameImageContainer>;
};

export default NameImageContainer;
