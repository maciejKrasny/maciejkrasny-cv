import React, { FunctionComponent } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { Icon, Typography, CardContent } from "@material-ui/core";
import {
  TimeLineElement,
  CardTitle,
  ContentTitle,
  DateRange,
  Description,
  StyledCardView,
  TitleAvatar,
  TitleIcon
} from "./../styles/TimeLine.styles";

export type TimeLineElement = {
  title?: string;
  dateRange?: string;
  description?: React.ReactElement;
};

export interface TimeLineCardProps {
  title?: string;
  icon?: string;
  elements: TimeLineElement[];
}

const TimeLine: FunctionComponent<TimeLineCardProps> = props => {
  const elements: React.ReactElement[] = props.elements.map(
    (element: TimeLineElement, index: number) => {
      const marginTop: string = index ? "32px" : "0";
      return (
        <TimeLineElement key={`${element}-${index}`} style={{ marginTop: marginTop }}>
          <Typography>
            <ContentTitle>{element.title}</ContentTitle>
          </Typography>
          <DateRange variant="inherit" color="textSecondary">
            <Icon style={{ fontSize: "16px", marginRight: "8px" }}>
              calendar_today
            </Icon>
            {element.dateRange}
          </DateRange>
          <Description variant="inherit">{element.description}</Description>
        </TimeLineElement>
      );
    }
  );

  return (
    <StyledCardView>
      <CardHeader
        avatar={
          <TitleAvatar style={{ backgroundColor: "#ffffff" }}>
            <TitleIcon>{props.icon}</TitleIcon>
          </TitleAvatar>
        }
        title={<CardTitle>{props.title}</CardTitle>}
      ></CardHeader>
      <CardContent>{elements}</CardContent>
    </StyledCardView>
  );
};

export default TimeLine;
