import { LOGIN_TEXT } from "../_constant/errors";

interface authFirebaseError extends Error {
  code?: string;
}

export const authErrorHandler = (error: authFirebaseError): { message: string } => {
  console.log("error code : ", error.code);

  if (error.code && error.code in LOGIN_TEXT) {
    return { message: LOGIN_TEXT[error.code as keyof typeof LOGIN_TEXT] };
  } else return { message: LOGIN_TEXT.UNKNOWN };
};
