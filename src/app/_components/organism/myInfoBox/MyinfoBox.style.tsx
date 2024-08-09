import styled from "styled-components";

export const InfoBox = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    padding: 30px 20px 30px 100px;
    button {
      margin-right: 10px;
      margin-bottom: 15px;
    }
  `,
  Infos: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
  `,
  Introduction: styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 14px span {
      font-weight: 600;
    }
  `,
};
