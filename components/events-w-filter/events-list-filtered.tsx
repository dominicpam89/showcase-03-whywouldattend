import { getFilteredEvents } from "@/lib/dummy.data";
import NotFoundUI from "../ui-awesome/not-found";
import EventsListComp from "../events/events-list";
import { transformMonthStringToNumber } from "@/lib/utils";

interface Props {
	year: string;
	month: string;
}
export default function EventsList({ year: yy, month: mm }: Props) {
	const year = parseInt(yy);
	const month = transformMonthStringToNumber(mm);
	if (!month) return <NotFoundUI />;
	const events = getFilteredEvents({ year, month });
	return (
		<section id="events">
			<EventsListComp events={events} />
		</section>
	);
}
