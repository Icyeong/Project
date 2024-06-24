import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../_services/auth_service";
import { setCookie } from "cookies-next";
import useAuthStore from "../_stores/client/authStore";
import { authErrorHandler } from "../_utils/authErrorHandler";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "../_stores/server/queryKeys";

const useLogin = () => {
  const { setAuthState } = useAuthStore();
  const router = useRouter();

  const emailPasswordLogin = useMutation({
    mutationKey: [QUERY_KEYS.AUTH.LOGIN.queryKey],
    mutationFn: (fetchData: { email: string; password: string }) => AuthService.signInWithEmailPassword(fetchData),
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
      setAuthState(true);
      window.location.href = "/";
    },
    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  const googleLogin = useMutation({
    mutationKey: [QUERY_KEYS.AUTH.GOOGLOGIN.queryKey],
    mutationFn: AuthService.signInWithGoogle,
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
      setAuthState(true);
      window.location.href = "/";
    },

    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  return { emailPasswordLogin, googleLogin };
};

export default useLogin;
