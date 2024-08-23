import { NextRequest, NextResponse } from "next/server";

const authPages = ["/login", "/signup"];
const ignorePaths = ["/_next", "/favicon.ico", "/api"];

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  if (ignorePaths.some((page) => req.nextUrl.pathname.startsWith(page))) {
    return NextResponse.next();
  }

  if (!accessToken && req.nextUrl.pathname !== "/login") {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.rewrite(loginUrl);
  }

  if (accessToken) {
    if (authPages.some((page) => req.nextUrl.pathname.startsWith(page))) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
