import { AUTH_TEXT } from "@/_constant/errors";

export interface authFirebaseError extends Error {
  code?: string;
}

export const authErrorHandler = (error: authFirebaseError): { message: string } => {
  console.log("error code : ", error.code);

  if (error.code && error.code in AUTH_TEXT) {
    return { message: AUTH_TEXT[error.code as keyof typeof AUTH_TEXT] };
  } else return { message: AUTH_TEXT.UNKNOWN };
};
