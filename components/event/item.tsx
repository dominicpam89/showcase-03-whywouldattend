import { EventType } from "@/lib/definition/dummy-event.type";
import ItemHeader from "./item-header";
import ItemContent from "./item-content";
import ContextEventProvider from "@/lib/context/event.context";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	return (
		<section
			id="event-detail-container"
			className="flex flex-col gap-12 pb-12"
		>
			<ContextEventProvider event={event}>
				<ItemHeader />
				<ItemContent />
			</ContextEventProvider>
		</section>
	);
}
