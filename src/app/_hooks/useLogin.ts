import { AuthService } from "@/_services/auth_service";
import { setCookie } from "cookies-next";
import useAuthStore, { JwtPayload_EMAIL, JwtPayload_GOOGLE } from "@/_stores/client/authStore";
import { authErrorHandler } from "@/_utils/authErrorHandler";
import { useCustomMutation } from "./useFetch";
import { jwtDecode } from "jwt-decode";
import { faker } from "@faker-js/faker";

const useLogin = () => {
  const { setAuthState, setUserName, setUserImg } = useAuthStore();

  const emailPasswordLogin = useCustomMutation(AuthService.signInWithEmailPassword, {
    onSuccess: async ({ token, user }) => {
      const decodedToken = jwtDecode<JwtPayload_EMAIL>(token);
      const userName = decodedToken.email;
      setCookie("accessToken", token);
      setUserName(userName);
      setUserImg(faker.image.avatar());
      setAuthState(true);
      window.location.href = "/";
    },
    onError: (error: Error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  const googleLogin = useCustomMutation(AuthService.signInWithGoogle, {
    onSuccess: async ({ token, user }) => {
      const decodedToken = jwtDecode<JwtPayload_GOOGLE>(token);
      const userName = decodedToken.name;
      setCookie("accessToken", token);
      setUserName(userName);
      setUserImg(faker.image.avatar());
      setAuthState(true);
      window.location.href = "/";
    },
    onError: (error: Error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  return { emailPasswordLogin, googleLogin };
};

export default useLogin;
