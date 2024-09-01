import { getEventById } from "@/lib/dummy.data";
import EventItem from "@/components/event/item";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import NotFoundUI from "@/components/ui-awesome/not-found";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const eventId = router.query.eventId as string;
	const event = getEventById(eventId);
	if (!event)
		return (
			<NotFoundUI
				title="No Event"
				subtitle="Requested event is null"
				message="There's no event with given id"
			/>
		);
	return <EventItem event={event} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
