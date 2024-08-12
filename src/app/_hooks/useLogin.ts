import { AuthService } from "@/_services/auth_service";
import { setCookie } from "cookies-next";
import useAuthStore, { JwtPayload_EMAIL, JwtPayload_GOOGLE } from "@/_stores/client/authStore";
import { authErrorHandler } from "@/_utils/authErrorHandler";
import { useCustomMutation } from "./useFetch";
import { jwtDecode } from "jwt-decode";
import { faker } from "@faker-js/faker";
import { v4 } from "uuid";

const useLogin = () => {
  const { setUserState } = useAuthStore();

  const emailPasswordLogin = useCustomMutation(AuthService.signInWithEmailPassword, {
    onSuccess: async ({ token, user }) => {
      const decodedToken = jwtDecode<JwtPayload_EMAIL>(token);
      const userName = decodedToken.email;
      setCookie("accessToken", token);
      setUserState({ userName, userId: v4(), userImg: faker.image.avatar() });
      window.location.href = "/";
    },
    onError: (error: Error) => {
      const { message } = authErrorHandler(error);
      window.alert(message);
    },
  });

  const googleLogin = useCustomMutation(AuthService.signInWithGoogle, {
    onSuccess: async ({ token, user }) => {
      const decodedToken = jwtDecode<JwtPayload_GOOGLE>(token);
      const userName = decodedToken.name;
      setCookie("accessToken", token);
      setUserState({ userName, userId: v4(), userImg: faker.image.avatar() });
      window.location.href = "/";
    },
    onError: (error: Error) => {
      const { message } = authErrorHandler(error);
      window.alert(message);
    },
  });

  return { emailPasswordLogin, googleLogin };
};

export default useLogin;
