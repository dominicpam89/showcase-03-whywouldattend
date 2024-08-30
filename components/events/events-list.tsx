import { EventType } from "@/lib/dummy.data";
import EventItem from "./events-list-item";
import EventsListHeading from "./events-list-heading";
import EventsListSearch from "./events-list-search";

interface Props {
	events: EventType[];
}
export default function EventsList({ events }: Props) {
	return (
		<div aria-label="list-container" className="flex flex-col gap-6">
			<EventsListHeading />
			<EventsListSearch />
			<div
				aria-label="events-list-container"
				className="px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
			>
				{events.map((event) => {
					return <EventItem key={event.id} event={event} />;
				})}
			</div>
		</div>
	);
}
