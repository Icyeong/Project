import { AuthService } from "@/_services/auth_service";
import { setCookie } from "cookies-next";
import useAuthStore from "@/_stores/client/authStore";
import { authErrorHandler } from "@/_utils/authErrorHandler";
import { useCustomMutation } from "./useFetch";

const useLogin = () => {
  const { setAuthState } = useAuthStore();

  const emailPasswordLogin = useCustomMutation(AuthService.signInWithEmailPassword, {
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
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
      setCookie("accessToken", token);
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
