import { CDN_DOMAIN } from "@/_env/env";
import styled from "styled-components";

export const LogoBox = {
  i: styled.div`
    background-image: url(${CDN_DOMAIN}/rsrc.php/v3/yM/r/8n91YnfPq0s.png);
    background-position: 0px -52px;
    background-size: auto;
    width: 175px;
    height: 51px;
    background-repeat: no-repeat;
    display: inline-block;
    margin: 40px 0 30px;
  `,

  ICON: styled.div`
    padding: 12px;
    width: 100%;
    height: 51px;
    margin: 40px 0 30px;
    svg {
      font-size: 22px;
    }
  `,
};
