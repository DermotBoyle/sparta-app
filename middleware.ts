import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

	const { origin, pathname } = req.nextUrl;

	let authCookie = req.cookies.get("sparta-auth-cookie");

	if (!authCookie && pathname !== '/signin') {
		return NextResponse.redirect(origin + "/signin");
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/",
};