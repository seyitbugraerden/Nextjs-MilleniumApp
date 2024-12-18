import Blog2 from "@/components/sections/Blog2"
import Cta1 from "@/components/sections/Cta1"
import Faqs1 from "@/components/sections/Faqs1"
import Features4 from "@/components/sections/Features4"
import Features5 from "@/components/sections/Features5"
import Hero2 from "@/components/sections/Hero2"
import HowItWork1 from "@/components/sections/HowItWork1"
import LogoCloud2 from "@/components/sections/LogoCloud2"
import Pricing2 from "@/components/sections/Pricing2"
import Static1 from "@/components/sections/Static1"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"

import Layout from "@/components/layout/Layout"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={2}>
				<Hero2 />
				<LogoCloud2 />
				<Features4 />
				<Features5 />
				<Testimonial2 />
				<Static1 />
				<Cta1 />
				<Team2 />
				<HowItWork1 />
				<Pricing2 />
				<Faqs1 />
				<Blog2 />

			</Layout>
		</>
	)
}