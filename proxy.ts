import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const proxy = async (request: NextRequest) => {
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/crud/:path*",  "/crud/upsert/:path*"],
}