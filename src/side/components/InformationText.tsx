import React, { FunctionComponent } from "react";
import {
  StyledInformationText,
  InformationTextContainer,
  StyledInformationTextLink,
  StyledIcon,
} from "./../styles/InformationText.styles";

export interface InformationTextProps {
  icon?: string;
  text?: string;
  isLink?: boolean;
}

const InformationText: FunctionComponent<InformationTextProps> = props => {
  const infoText: React.ReactElement = props.isLink ? (
    <StyledInformationTextLink
      href="https://github.com/maciejKrasny"
      target="_blank"
    >
      {props.text}
    </StyledInformationTextLink>
  ) : (
    <StyledInformationText>{props.text}</StyledInformationText>
  );
  return (
    <InformationTextContainer>
      <StyledIcon style={{ fontSize: "32px" }}>{props.icon}</StyledIcon>
      {infoText}
    </InformationTextContainer>
  );
};

export default InformationText;
