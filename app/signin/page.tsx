import Card from "@/app/common/components/Card/Card"
import Style from './page.module.scss'


const SignInPage = () => {
	return (
		<main className={Style.main}>
			<div className={Style.mainContainer} >
				<img className={Style.mainImage} src="/sparta-logo.svg" alt="Sparta commodities brand logo" />
				<Card />
			</div>
		</main>
	)
}

export default SignInPage