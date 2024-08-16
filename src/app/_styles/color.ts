import { createGlobalStyle } from "styled-components";

export const COLOR = {
  bg: {
    light: "#FFFFFF",
    dark: "#000000",
  },

  text: {
    primary: {
      light: "#000000",
      dark: "#F5F5F5",
    },
    secondary: {
      light: "#737373",
      dark: "#A8A8A8",
    },
    tertiary: {
      light: "#737373",
      dark: "#0095F6",
      hover: {
        light: "#737373",
        dark: "#E0F1FF",
      },
    },
  },

  button: {
    primary: {
      blue: "#0095F6",
      hover: {
        light: "#737373",
        dark: "#1877F2",
      },
    },
    secondary: {
      light: "#FFFFFF",
      dark: "#1E1E1E",
    },
  },
  nav: {
    buttonHover: {
      light: "#F2F2F2",
      dark: "#FFFFFF1A",
    },
  },

  input: {
    bg: {
      light: "#EFEFEF",
      dark: "#363636",
    },
    text: {
      light: "#EFEFEF",
      dark: "#EFEFEF",
    },
  },

  common: {
    border: {
      light: "#E3E3E3",
      dark: "rgb(38, 38, 38)",
    },
  },
};

export const lightTheme = {
  bg: COLOR.bg.light,
  text: COLOR.text.primary.light,
  textSecondary: COLOR.text.secondary.light,
  textTertiary: COLOR.text.tertiary.light,
  button: COLOR.button.primary.blue,
  buttonHover: COLOR.button.primary.hover.light,
  buttonSecondary: COLOR.button.secondary.light,
  border: COLOR.common.border.light,
  input: COLOR.input.bg.light,
  navHover: COLOR.nav.buttonHover.light,
};

export const darkTheme = {
  bg: COLOR.bg.dark,
  text: COLOR.text.primary.dark,
  textSecondary: COLOR.text.secondary.dark,
  textTertiary: COLOR.text.tertiary.dark,
  button: COLOR.button.primary.blue,
  buttonHover: COLOR.button.primary.hover.dark,
  buttonSecondary: COLOR.button.secondary.dark,
  border: COLOR.common.border.dark,
  input: COLOR.input.bg.dark,
  navHover: COLOR.nav.buttonHover.dark,
};

export const GlobalStyle = createGlobalStyle`
  body, div, a, ul, li, textarea, input {
    background-color: ${({ theme }) => theme.bg} !important;
    color: ${({ theme }) => theme.text} !important;
    border-color: ${({ theme }) => theme.border} !important;
    transition: all 0.2s;
  }

  /* GNB */
  li > button, li > a{
    background-color: ${({ theme }) => theme.bg} !important;
    color: ${({ theme }) => theme.text} !important;
    &:hover{
      background:  ${({ theme }) => theme.navHover} !important;
    }
  }

  /* Modal bg */
  #modal-root > div{
    background: rgba(0, 0, 0, 0.6) !important;
  }

  /* Button */
  button {
    color: ${({ theme }) => theme.text} !important;
  }

  /* Input */
  input {
    background-color: ${({ theme }) => theme.input} !important;
    color: ${({ theme }) => theme.text} !important;
    padding: 0.5em;

    &::placeholder {
      color: ${({ theme }) => theme.textSecondary} !important;
    }
  }

  /* Link */
  a {
    color: ${({ theme }) => theme.text} !important;

    &:hover {
      color: ${({ theme }) => theme.text} !important;
    }
  }

  /* Textarea */
  textarea {
    background-color: ${({ theme }) => theme.bg} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  
  /* 커스텀 스크롤바 */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg} !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.textSecondary} !important;
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.bg} !important;
  }
`;
