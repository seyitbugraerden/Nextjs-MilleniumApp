import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/kurumsal") {
    return NextResponse.redirect(
      new URL("/kurumsal/biz-kimiz", req.url),
      307
    );
  }
  if (req.nextUrl.pathname === "/hizmetlerimiz") {
    return NextResponse.redirect(
      new URL("/hizmetlerimiz/web-tasarim-ve-gelistirme", req.url),
      307
    );
  }
}
