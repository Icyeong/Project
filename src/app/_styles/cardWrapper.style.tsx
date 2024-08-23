import styled from "styled-components";
import { COLOR } from "./color";

export const CardWarpper = styled.div`
  max-width: 350px;
  width: 100%;
  border: 1px solid ${COLOR.common.border.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
