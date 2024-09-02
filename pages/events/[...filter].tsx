import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import EventsList from "@/components/events/events-list";
import { GetServerSideProps } from "next";
import { transformMonthStringToNumber } from "@/lib/utils";
import {
	getEventsYearsAndMonths,
	getFilteredEvents,
} from "@/lib/services/firebase/events.service";
import ContextEventsListProvider, {
	ContextEventsListType,
} from "@/lib/context/events-list.context";

export const getServerSideProps: GetServerSideProps<
	ContextEventsListType
> = async (context) => {
	const { filter } = context.params as { filter: string[] };
	const yy = filter.at(0);
	const mm = filter.at(1);
	if (!yy || !mm) return { notFound: true, redirect: "/events" };
	const year = parseInt(yy);
	const month = transformMonthStringToNumber(mm);
	if (!month) return { notFound: true };
	const events = await getFilteredEvents({ year, month });
	const eventDates = await getEventsYearsAndMonths();
	if (!eventDates.years) return { notFound: true };
	return {
		props: {
			events,
			eventDates: { years: eventDates.years, months: eventDates.months },
			dateSelect: { yy, mm },
		},
	};
};

const Page: NextPageWithLayout<ContextEventsListType> = (props) => {
	return (
		<section id="events-with-filter">
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
