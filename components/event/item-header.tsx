import { EventType } from "@/lib/dummy.data";
import Image from "next/image";
import ItemHeaderText from "./item-header-text";
import ItemHeaderImage from "./item-header-image";

interface Props {
	event: EventType;
}
export default function ItemHeader({ event }: Props) {
	return (
		<header aria-label="event-detail-header">
			<ItemHeaderText event={event} />
			<ItemHeaderImage event={event} />
		</header>
	);
}
