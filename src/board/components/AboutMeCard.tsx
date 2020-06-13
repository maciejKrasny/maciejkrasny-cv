import React, { FunctionComponent } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { Typography, CardContent } from "@material-ui/core";
import {
  StyledCardView,
  TitleAvatar,
  TitleIcon,
  CardTitle,
  ContentTitle,
  AboutMeText
} from "./../styles/AboutMeCard.styles";

export interface AboutMeCardProps {
  welcomeText?: string;
  aboutMeText?: string;
}

const AboutMeCard: FunctionComponent<AboutMeCardProps> = props => {
  return (
    <StyledCardView>
      <CardHeader
        avatar={
          <TitleAvatar style={{ backgroundColor: "#ffffff" }}>
            <TitleIcon>person</TitleIcon>
          </TitleAvatar>
        }
        title={<CardTitle>O mnie</CardTitle>}
      ></CardHeader>
      <CardContent>
        <Typography>
          <ContentTitle>{props.welcomeText}</ContentTitle>
        </Typography>
        <AboutMeText variant="inherit">{props.aboutMeText}</AboutMeText>
      </CardContent>
    </StyledCardView>
  );
};

export default AboutMeCard;
