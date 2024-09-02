import React from "react";
import { useContextEvent } from "@/lib/hooks/event.context.hook";
import Image from "next/image";

export default function ItemHeaderImage() {
	const { event } = useContextEvent();
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
