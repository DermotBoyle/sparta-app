import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'


export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200
	res.json({ success: true })
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('sparta-auth-session', req.body.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			expires: new Date(0), // Expire the cookie immediately
			sameSite: 'strict',
			path: '/',
		})
	)
}
