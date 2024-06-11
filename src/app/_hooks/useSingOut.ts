import { getAuth, signOut } from "firebase/auth";
import app from "../_firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import useAuthStore from "../_stores/client/authStore";
import { useMutation } from "@tanstack/react-query";
import { authErrorHandler } from "../_utils/authErrorHandler";

const useSignOut = () => {
  const auth = getAuth(app);
  const { setAuthState } = useAuthStore();

  const router = useRouter();

  const signOutService = useMutation({
    mutationKey: ["signout"],
    mutationFn: () => signOut(auth),
    onSuccess: async () => {
      deleteCookie("accessToken");
      setAuthState(true);
      router.push("/login");
    },

    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });
  return { signOutService };
};

export default useSignOut;
