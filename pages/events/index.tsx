import {
	getEvents,
	getEventsYearsAndMonths,
} from "@/lib/services/firebase/events.service";
import EventsList from "@/components/events/events-list";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import ContextEventsListProvider, {
	ContextEventsListType,
} from "@/lib/context/events-list.context";

export const getStaticProps: GetStaticProps<
	ContextEventsListType
> = async () => {
	const { data: events } = await getEvents();
	const eventDates = await getEventsYearsAndMonths();
	if (!events) {
		return { notFound: true };
	}
	if (eventDates.years == null) return { notFound: true };
	return {
		props: {
			events,
			eventDates: { years: eventDates.years, months: eventDates.months },
			dateSelect: { yy: "", mm: "" },
		},
		revalidate: 60 * 60,
	};
};

const Page: NextPageWithLayout<ContextEventsListType> = (props) => {
	return (
		<section id="events">
			<ContextEventsListProvider {...props}>
				<EventsList />
			</ContextEventsListProvider>
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
