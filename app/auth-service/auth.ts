const FAKE_JWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjEwYTg2ZjNkY2Q2NzJkMWZjMjEyOTdiMmQwNmZmOWQ5In0.e30.7_WJHm1vCm9nSIKgf86h_PZRMWtV1JdpYbWF3jwiuJbjOpYoPYLoFpym5nRPlPORkn2TqzRx1_wAkr2liWjmqw'

export default async function auth() {

	// Simulate a 2 second delay in authenticating
	await new Promise(resolve => setTimeout(resolve, 2000))

	return {
		FAKE_JWT
	}
}