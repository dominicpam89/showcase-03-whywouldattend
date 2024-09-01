import EventsList from "@/components/events/events-list";
import { getFilteredEvents } from "@/lib/dummy.data";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import NotFoundUI from "@/components/ui-awesome/not-found";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { filter } = router.query;
	const yearQuery = filter?.at(0);
	const monthQuery = filter?.at(0);
	const year = yearQuery
		? parseInt(yearQuery)
		: parseInt(new Date().getFullYear().toString());
	const month = monthQuery ? parseInt(monthQuery) : 1;
	const events = getFilteredEvents({ year, month });
	if (events.length == 0)
		return (
			<NotFoundUI
				title="No Events"
				subtitle="Not even one event is listed"
				message="Maybe you should change year and month filter"
			/>
		);
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
