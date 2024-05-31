import { useQuery } from "@tanstack/react-query";
import { AUTH_DOMAIN } from "../_env/env";
const LOGIN = "LOGIN";

//현재 미사용
const useLogin = (fetchData: { email: string; password: string }) => {
  // return useQuery({
  //   queryKey: [LOGIN],
  //   queryFn: () => {
  //     return fetch(`${AUTH_DOMAIN}/signin`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       // body: JSON.stringify(fetchData),
  //       body: JSON.stringify({ memberId: "test123456", password: "test123456" }), //임시 테스트 가능 데이터
  //       credentials: "include",
  //     }).then((res) => res.json());
  //   },
  //   enabled: false,
  // });
};
export const AuthService = {
  useLogin,
};
