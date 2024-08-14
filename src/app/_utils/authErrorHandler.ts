import { AUTH_ERROR } from "@/_constant/errors";

export interface authFirebaseError extends Error {
  code?: string;
}

export const authErrorHandler = (error: authFirebaseError): { message: string } => {
  console.log("error code : ", error.code);

  if (error.code && error.code in AUTH_ERROR) {
    return { message: AUTH_ERROR[error.code as keyof typeof AUTH_ERROR] };
  } else return { message: AUTH_ERROR.UNKNOWN };
};
