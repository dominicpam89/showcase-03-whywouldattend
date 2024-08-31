import EventsList from "@/components/events/events-list";
import { getFilteredEvents } from "@/lib/dummy.data";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { filter } = router.query;
	console.log(filter);
	return (
		<section id="events">
			{/*  */}
			{/* <EventsList events={events} /> */}
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
