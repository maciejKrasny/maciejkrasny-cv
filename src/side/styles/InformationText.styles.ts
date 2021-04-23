import styled from "styled-components";
import devices from "../../devices/devices";
import Icon from "@material-ui/core/Icon";

const InformationTextContainer = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

const StyledInformationText = styled.span`
  font-size: 16px;
  font-family: Roboto;
  margin-left: 16px;
  @media (max-width: ${devices.tablet}) {
    font-size: 14px;
  }
  @media (max-width: ${devices.mobile}) {
    font-size: 16px;
    margin-left: 32px;
  }
`;

const StyledInformationTextLink = styled.a`
  font-size: 16px;
  font-family: Roboto;
  margin-left: 16px;
  color: #ffffff;
  &:hover {
    color: #fafafa;
  }
  @media (max-width: ${devices.tablet}) {
    font-size: 14px;
  }
  @media (max-width: ${devices.mobile}) {
    font-size: 16px;
    margin-left: 32px;
  }
`;

const StyledIcon = styled(Icon)`
  span {
    font-size: 32px;
  }
`;

export {
  InformationTextContainer,
  StyledInformationText,
  StyledInformationTextLink,
  StyledIcon
};
