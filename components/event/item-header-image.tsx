import React from "react";
import { useContextEvent } from "@/lib/hooks/event.context.hook";
import ImageComp from "@/components/ImageComp";

export default function ItemHeaderImage() {
	const { event } = useContextEvent();
	return (
		<div aria-label="image-container" className="relative w-full h-[320px]">
			<ImageComp
				src={event.image}
				alt={event.title}
				height={640}
				width={800}
				className="object-cover object-bottom"
			/>
		</div>
	);
}
