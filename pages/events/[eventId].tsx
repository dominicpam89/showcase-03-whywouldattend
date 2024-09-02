import EventItem from "@/components/event/item";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import NotFoundUI from "@/components/ui-awesome/not-found";
import { getEventById } from "@/lib/services/firebase/events.service";
import { GetServerSideProps } from "next";
import { EventType } from "@/lib/definition/dummy-event.type";

interface PageProps {
	event: EventType | null;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
	context
) => {
	const { eventId } = context.params as { eventId: string };
	const event = await getEventById(eventId);
	return {
		props: {
			event,
		},
	};
};

const Page: NextPageWithLayout<PageProps> = ({ event }) => {
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
