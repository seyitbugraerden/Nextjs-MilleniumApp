import Blog3 from "@/components/sections/Blog3"
import Cta2 from "@/components/sections/Cta2"
import Cta3 from "@/components/sections/Cta3"
import Faqs2 from "@/components/sections/Faqs2"
import Features6 from "@/components/sections/Features6"
import Features7 from "@/components/sections/Features7"
import Hero3 from "@/components/sections/Hero3"
import LogoCloud3 from "@/components/sections/LogoCloud3"
import Newsletter2 from "@/components/sections/Newsletter2"
import Pricing3 from "@/components/sections/Pricing3"
import Services2 from "@/components/sections/Services2"
import Static2 from "@/components/sections/Static2"

import Layout from "@/components/layout/Layout"
export default function Home3() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={2}>

				<Hero3 />
				<LogoCloud3 />
				<Services2 />
				<Cta2 />
				<Static2 />
				<Cta3 />
				<Features6 />
				<Features7 />
				<Pricing3 />
				<Faqs2 />
				<Blog3 />
				<Newsletter2 />

			</Layout>
		</>
	)
}