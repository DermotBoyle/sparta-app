import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { NextApiResponse } from 'next'

export async function GET(req: NextRequest, res: NextApiResponse
) {
	let response = NextResponse.json({ message: 'successfully signed in' }, { status: 200 })

	await new Promise((resolve) => setTimeout(resolve, 2000))

	cookies().set({
		name: 'sparta-auth-cookie',
		httpOnly: true,
		value: '',
		maxAge: 0, // delete cookie
	})

	return response
}
