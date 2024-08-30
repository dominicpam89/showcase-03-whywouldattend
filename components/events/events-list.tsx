import { EventType } from "@/lib/dummy.data";

interface Props {
	events: EventType[];
}
export default function EventsList({ events }: Props) {
	console.log(events);
	return <></>;
}
