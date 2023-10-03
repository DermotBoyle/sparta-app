import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import auth from '@/app/auth-service/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const token = await auth()
	res.statusCode = 200
	res.json({ success: true })
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('sparta-auth-session', token.FAKE_JWT, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			maxAge: 60 * 60 * 24 * 7, // 1 week
			sameSite: 'strict',
			path: '/',
		})
	)

	return res
}
