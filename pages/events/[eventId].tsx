import { getEventById } from "@/lib/dummy.data";
import EventItem from "@/components/event/item";
import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const eventId = router.query.eventId as string;
	const event = getEventById(eventId);
	if (!event) return <p>No event found!</p>;
	return (
		<section id="event-detail">
			<EventItem event={event} />
		</section>
	);
}
