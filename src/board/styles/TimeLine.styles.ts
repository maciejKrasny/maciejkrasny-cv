import CardView from "@material-ui/core/Card";
import { Icon, Avatar, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledCardView = styled(CardView)`
  position: relative;
  margin-top: 32px;
  width: 100%;
  :before {
    content: "";
    position: absolute;
    width: 2px;
    background: rgba(0, 0, 0, 0.2);
    left: 36px;
    top: 55px;
    bottom: 16px;
  }
`;

const TitleAvatar = styled(Avatar)`
  border: 1px solid #c5d1c8;
`;

const TitleIcon = styled(Icon)`
  color: #6f7872;
`;

const CardTitle = styled.span`
  font-size: 20px;
  font-family: Roboto;
`;

const ContentTitle = styled.span`
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
`;

const TimeLineElement = styled.div`
  position: relative;
  padding-left: 42px;
  :before {
    content: "";
    position: absolute;
    top: 3px;
    left: 13px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #2196f3;
    border: 2px solid #fff;
  }
`;

const DateRange = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: Roboto;
`;

const Description = styled(Typography)`
  font-size: 16px;
  font-family: Roboto;
`;

export {
  StyledCardView,
  TitleAvatar,
  TitleIcon,
  CardTitle,
  ContentTitle,
  TimeLineElement,
  DateRange,
  Description
};
