import EventsList from "@/components/events/events-list";
import { getAllEvents } from "@/lib/dummy.data";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";

const Page: NextPageWithLayout = () => {
	const events = getAllEvents();
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
