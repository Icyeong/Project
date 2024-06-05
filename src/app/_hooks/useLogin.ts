import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../_services/auth_service";
import { setCookie } from "cookies-next";
import useAuthStore from "../_stores/client/authStore";
import { authErrorHandler } from "../_utils/errorHandler";

const LOGIN = "AUTH LOGIN";
const GOOGLE_LOGIN = "GOOGLE LOGIN";
const useLogin = () => {
  const { setAuthState } = useAuthStore();

  const emailPasswordLogin = useMutation({
    mutationKey: [LOGIN],
    mutationFn: (fetchData: { email: string; password: string }) => AuthService.signInWithEmailPassword(fetchData),
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
      setAuthState(true);
    },
    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  const googleLogin = useMutation({
    mutationKey: [GOOGLE_LOGIN],
    mutationFn: AuthService.signInWithGoogle,
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
      setAuthState(true);
    },

    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  return { emailPasswordLogin, googleLogin };
};

export default useLogin;
