import styled from "styled-components";

export const GnbStyle = {
  Wrapper: styled.div`
    max-width: 335px;
    min-height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    border-right: 1px solid #a0a0a0;
    background-color: white;
    padding: 8px 12px 20px;
    display: flex;
    flex-direction: column;
  `,
  Top: styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  Bottom: styled.ul`
    display: flex;
    flex-direction: column;
  `,
};
