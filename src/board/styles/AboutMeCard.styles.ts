import CardView from "@material-ui/core/Card";
import { Icon, Avatar, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledCardView = styled(CardView)`
  width: 100%;
  font-family: Roboto;
`;

const TitleAvatar = styled(Avatar)`
  border: 1px solid #c5d1c8;
`;

const TitleIcon = styled(Icon)`
  color: #6f7872;
`;

const CardTitle = styled.span`
  font-size: 20px;
`;

const ContentTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const AboutMeText = styled(Typography)`
  font-size: 16px;
`;

export {
  StyledCardView,
  TitleAvatar,
  TitleIcon,
  CardTitle,
  ContentTitle,
  AboutMeText
};
