import { EventType } from "@/lib/dummy.data";
import Image from "next/image";

interface Props {
	event: EventType;
}
export default function ItemHeaderImage({ event }: Props) {
	return (
		<div aria-label="image-container" className="relative w-full h-[50vh]">
			<Image
				src={event.image}
				alt={event.title}
				fill
				sizes="100%"
				className="object-cover object-bottom"
			/>
		</div>
	);
}
