import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import auth from '@/app/auth-service/auth'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	let response = NextResponse.json({ message: 'successfully signed in' }, { status: 200 })
	const token = await auth()
	cookies().set({
		name: 'sparta-auth-cookie',
		value: token.FAKE_JWT,
		httpOnly: true,
		path: '/',
		maxAge: 60 * 60 * 24 * 7 // 1 week
	})

	return response
}
