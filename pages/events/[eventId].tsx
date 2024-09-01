import EventItem from "@/components/event/item";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import NotFoundUI from "@/components/ui-awesome/not-found";
import { getEventById } from "@/lib/services/dummy-events.service";
import { GetStaticPaths, GetStaticProps } from "next";
import { EventType } from "@/lib/definition/dummy-event.type";
import { useRouter } from "next/router";
import { Skeleton } from "@/components/ui/skeleton";

interface PageProps {
	event: EventType | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { eventId: "e1" } }],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
	const { eventId } = context.params as { eventId: string };
	const event = await getEventById(eventId);
	return {
		props: {
			event,
		},
		revalidate: 300,
	};
};

const Page: NextPageWithLayout<PageProps> = ({ event }) => {
	const router = useRouter();
	if (!event)
		return (
			<NotFoundUI
				title="No Event"
				subtitle="Requested event is null"
				message="There's no event with given id"
			/>
		);
	if (router.isFallback) {
		return <Skeleton className="w-full h-36" />;
	}
	return <EventItem event={event} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
