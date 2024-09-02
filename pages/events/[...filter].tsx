import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import EventsList from "@/components/events/events-list";
import { GetStaticPaths, GetStaticProps } from "next";
import { EventType } from "@/lib/definition/dummy-event.type";
import { transformMonthStringToNumber } from "@/lib/utils";
import {
	GetEventsYearsAndMonthsReturn,
	getEventsYearsAndMonths,
	getFilteredEvents,
} from "@/lib/services/firebase/events.service";
import LoadingUI from "@/components/ui-awesome/loading";

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

interface PageProps {
	events: EventType[];
	eventDates: GetEventsYearsAndMonthsReturn;
	dateSelect: { yy: string; mm: string };
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
	const { filter } = context.params as { filter: string[] };
	const yy = filter.at(0);
	const mm = filter.at(1);
	if (!yy || !mm) return { notFound: true };
	const year = parseInt(yy);
	const month = transformMonthStringToNumber(mm);
	if (!month) return { notFound: true };
	const events = await getFilteredEvents({ year, month });
	const eventDates = await getEventsYearsAndMonths();
	if (!eventDates) return { notFound: true };
	return {
		props: { events, eventDates, dateSelect: { yy, mm } },
		revalidate: 60 * 15,
	};
};

const Page: NextPageWithLayout<PageProps> = ({
	events,
	eventDates,
	dateSelect,
}) => {
	const router = useRouter();
	if (router.isFallback) return <LoadingUI />;
	return (
		<section id="events-with-filter">
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
