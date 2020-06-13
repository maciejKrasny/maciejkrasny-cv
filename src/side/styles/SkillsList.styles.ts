import styled from "styled-components";
import devices from "../../devices/devices";

const ListElement = styled.li`
  font-size: 16px;
  font-family: Roboto;
  @media (max-width: ${devices.tablet}) {
    font-size: 14px;
  }
  @media (max-width: ${devices.mobile}) {
    font-size: 16px;
  }
`;

export { ListElement };
