import Blog4 from "@/components/sections/Blog4"
import Cta4 from "@/components/sections/Cta4"
import Cta5 from "@/components/sections/Cta5"
import Cta6 from "@/components/sections/Cta6"
import Features8 from "@/components/sections/Features8"
import Features9 from "@/components/sections/Features9"
import Hero4 from "@/components/sections/Hero4"
import HowItWork2 from "@/components/sections/HowItWork2"
import LogoCloud4 from "@/components/sections/LogoCloud4"
import Newsletter3 from "@/components/sections/Newsletter3"
import Services3 from "@/components/sections/Services3"
import Static3 from "@/components/sections/Static3"
import Team3 from "@/components/sections/Team3"
import dynamic from 'next/dynamic'
const Services5 = dynamic(() => import('@/components/sections/Services5'), {
	ssr: false,
})


import Layout from "@/components/layout/Layout"
export default function Home4() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={3}>

				<Hero4 />
				<LogoCloud4 />
				<Services3 />
				<Cta4 />
				<Static3 />
				<Team3 />
				<Services5 />
				<Features8 />
				<Features9 />
				<Cta5 />
				<HowItWork2 />
				<Cta6 />
				<Blog4 />
				<Newsletter3 />

			</Layout>
		</>
	)
}