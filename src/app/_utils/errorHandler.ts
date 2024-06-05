export const authErrorHandler = (error: any): { message: string } => {
  console.log("error code : ", error.code);

  if (error.code === "auth/invalid-credential") {
    return { message: "이메일, 비밀번호를 다시 확인해주세요." };
  }
  return { message: "" };
};
