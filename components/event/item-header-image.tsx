import React from "react";
import { useContextEvent } from "@/lib/hooks/event.context.hook";

export default function ItemHeaderImage() {
	const { event } = useContextEvent();
	return (
		<div aria-label="image-container" className="relative w-full h-[480px]">
			<img
				src={event.image}
				alt={event.title}
				className="w-full h-full object-cover object-bottom"
			/>
		</div>
	);
}
