import styled from "styled-components";

export const EditForm = {
  Container: styled.div`
    min-width: 700px;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    textarea,
    input {
      padding: 16px;
      border: 1px solid #e3e3e3;
      border-radius: 15px;
      font-weight: 600;
      background-color: white;
      max-width: none;
    }
  `,
  Title: styled.h1`
    font-size: 20px;
    margin-bottom: 20px;
  `,
  InfoBox: styled.div`
    display: flex;
    padding: 16px 5px;
    background-color: #efefef;
    border-radius: 15px;
  `,
  Label: styled.div`
    padding: 16px 0;
    font-weight: 600;
  `,
  Submit: styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
    button {
      width: 250px;
      height: 45px;
      border-radius: 5px;
    }
  `,
};
