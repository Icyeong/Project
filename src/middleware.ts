import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

const authPages = ["/login", "/signup"];

export function middleware(req: NextRequest) {
  const accessToken = getCookie("accessToken", { req });

  if (accessToken) {
    if (authPages.some((page) => req.nextUrl.pathname.startsWith(page))) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (!accessToken) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.rewrite(loginUrl);
  }

  return NextResponse.next();
}
