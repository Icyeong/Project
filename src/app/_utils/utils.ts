import { getCookie } from "cookies-next";

export function getRandomBoolean() {
  return Boolean(Math.round(Math.random() * 1));
}

export function getRandomNumber(max: number) {
  return Math.round(Math.random() * max);
}

export function getFetchOptions(method: string, token: boolean, body: any) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${getCookie("accessToken")}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}

export function getErrorHandler(error: unknown) {
  if (error instanceof Error) {
    return console.error(error.message);
  } else {
    return console.error("unexpected error");
  }
}

interface Sortable {
  [key: string]: any;
}
export const sortByTime = (arr: Sortable[], key: string) => {
  return arr.sort((a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime());
};
