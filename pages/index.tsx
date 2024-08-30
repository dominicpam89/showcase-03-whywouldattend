import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import HomeLayout from "@/components/HomeLayout";
import { HeroSection } from "@/components/home/hero-section";

const Page: NextPageWithLayout = () => {
	return (
		<section id="home">
			<HeroSection />
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <HomeLayout>{page}</HomeLayout>;
};

export default Page;
