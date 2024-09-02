import {
	getEvents,
	getEventsYearsAndMonths,
	GetEventsYearsAndMonthsReturn,
} from "@/lib/services/firebase/events.service";
import EventsList from "@/components/events/events-list";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { EventType } from "@/lib/definition/dummy-event.type";

interface PageProps {
	events: EventType[];
	eventDates: GetEventsYearsAndMonthsReturn;
	dateSelect: { yy: string; mm: string };
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const { data: events } = await getEvents();
	const eventDates = await getEventsYearsAndMonths();
	if (!events) {
		return { notFound: true };
	}
	if (!eventDates) return { notFound: true };
	return {
		props: { events, eventDates, dateSelect: { yy: "", mm: "" } },
		revalidate: 60 * 15,
	};
};

const Page: NextPageWithLayout<PageProps> = ({
	events,
	eventDates,
	dateSelect,
}) => {
	return (
		<section id="events">
			<EventsList
				events={events}
				eventDates={eventDates}
				dateSelect={dateSelect}
			/>
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
