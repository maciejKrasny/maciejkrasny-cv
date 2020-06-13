import React, { FunctionComponent } from "react";
import Icon from "@material-ui/core/Icon";
import {
  StyledInformationText,
  InformationTextContainer,
  StyledInformationTextLink
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
      <Icon style={{ fontSize: "32px" }}>{props.icon}</Icon>
      {infoText}
    </InformationTextContainer>
  );
};

export default InformationText;
