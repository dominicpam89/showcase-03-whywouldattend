import { getAllEvents } from "@/lib/services/dummy-events.service";
import EventsList from "@/components/events/events-list";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { EventType } from "@/lib/definition/dummy-event.type";

interface PageProps {
	events: EventType[];
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const events = await getAllEvents();
	if (!events) {
		return { notFound: true };
	}
	return {
		props: {
			events,
		},
		revalidate: 300,
	};
};

const Page: NextPageWithLayout<PageProps> = ({ events }) => {
	return (
		<section id="events">
			<EventsList events={events} />
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
