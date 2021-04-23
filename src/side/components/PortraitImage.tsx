import React, { FunctionComponent } from "react";
import maciej_krasny from "./../../images/maciej_krasny.png";
import { StyledPortrait } from "../styles/PortraitImage.styles";

const PortraitImage: FunctionComponent<{}> = () => {
  return <StyledPortrait src={maciej_krasny} alt="portrait" />;
};

export default PortraitImage;
