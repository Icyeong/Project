import styled from "styled-components";

export const LoginWrapper = styled.div`
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
  .btn-newAcount {
    margin-top: 10px;
    padding: 15px 0;
    a {
      font-size: 14px;
      font-weight: 600;
      color: #0095f6;
      margin: 0;
    }
  }
`;
