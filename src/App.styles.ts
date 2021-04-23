import styled from "styled-components";
import devices from "./devices/devices";

const StyledMain = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

export { StyledMain };
