import React from "react";
import { useContextEvent } from "@/lib/context/event.context.hook";

export default function ItemContent() {
	const { event, date } = useContextEvent();
	const { city, province, zipCode } = event.location;
	return (
		<div aria-label="event-detail-content" className="w-full p-12">
			<div aria-label="event-location"></div>
			<div aria-label="event-date">
				<span>{date.year}</span>
				<span>{date.month}</span>
				<span>{date.date}</span>
				<span>{date.day}</span>
			</div>
		</div>
	);
}
