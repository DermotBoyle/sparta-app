import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

	let authCookie = req.cookies.get("sparta-auth-session");

	if (!authCookie) {
		return NextResponse.redirect("/signin");
	}


	return NextResponse.next();
}
