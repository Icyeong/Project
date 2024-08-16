import styled from "styled-components";

export const SignupWrapper = styled.div`
  width: 350px;
  .divider {
    width: 270px;
    font-size: 13px;
    color: #737373;
    text-align: center;
    margin: 13px 0 27px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      width: 100px;
      height: 0.5px;
      display: inline-block;
      background-color: #dbdbdb;
    }
  }
  a {
    font-size: 12px;
    margin: 20px 0;
  }
  .btn-signup {
    margin-top: 10px;
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 14px;
    a {
      font-size: 14px;
      font-weight: 600;
      color: #0095f6 !important;
      margin: 0 0 0 5px;
    }
  }
`;

export const SignupPrompt = styled.p`
  font-size: 16px;
  color: #737373;
  font-weight: 600;
  margin: 0 40px 15px;
  text-align: center;
`;
