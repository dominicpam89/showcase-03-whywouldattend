import { EventType } from "@/lib/dummy.data";
import EventItem from "./events-list-item";
import EventsListHeading from "./events-list-heading";

interface Props {
	events: EventType[];
}
export default function EventsList({ events }: Props) {
	return (
		<div aria-label="list-container" className="flex flex-col gap-4">
			<EventsListHeading />
			<div
				aria-label="events-list-container"
				className="grid grid-cols-1 lg:grid-cols-3"
			>
				{events.map((event) => {
					return <EventItem key={event.id} event={event} />;
				})}
			</div>
		</div>
	);
}
