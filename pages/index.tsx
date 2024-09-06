import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import HomeLayout from "@/components/HomeLayout";
import { HeroSection } from "@/components/home/hero-section";
import { getFeaturedEvents } from "@/lib/services/firebase/events.service";
import { GetStaticProps } from "next";
import FeaturedEvents from "@/components/home/featured-events";
import { FeaturedEventType } from "@/lib/definition/event.type";

interface PageProps {
	events: FeaturedEventType[];
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const { data } = await getFeaturedEvents();
	if (!data) return { notFound: true };
	const events = data.map((event, index) => {
		const isImageLeft = index % 2 == 0;
		return {
			id: event.id,
			title: event.title,
			description: event.subtitle,
			imageUrl: event.image,
			isImageLeft,
		} as FeaturedEventType;
	});
	return {
		props: { events },
	};
};

const Page: NextPageWithLayout<PageProps> = ({ events }) => {
	return (
		<section id="home">
			<HeroSection />
			<FeaturedEvents events={events} />
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <HomeLayout>{page}</HomeLayout>;
};

export default Page;
