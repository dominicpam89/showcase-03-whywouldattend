import EventsList from "@/components/events/events-list";
import { getAllEvents } from "@/lib/dummy.data";

export default function Page() {
	const events = getAllEvents();
	return (
		<section id="events">
			<EventsList events={events} />
		</section>
	);
}
