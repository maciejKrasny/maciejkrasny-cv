import devices from "./../../devices/devices";
import styled from "styled-components";

const BoardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding: 32px;
  @media (max-width: ${devices.tablet}) {
    padding: 16px;
  }
`;

const StyledBoard = styled.div`
  width: 80%;
  @media (max-width: ${devices.tablet}) {
    width: 100%;
  }
`;

const ExperienceList = styled.ul`
  padding-left: 24px;
`;

export { BoardContainer, StyledBoard, ExperienceList };
