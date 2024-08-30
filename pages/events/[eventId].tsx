import { getEventById } from "@/lib/dummy.data";
import EventItem from "@/components/event/item";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const eventId = router.query.eventId as string;
	const event = getEventById(eventId);
	if (!event) return <p>No event found!</p>;
	return <EventItem event={event} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
