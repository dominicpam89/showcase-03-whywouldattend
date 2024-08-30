import React from "react";
import { useContextEvent } from "@/lib/context/event.context.hook";

export default function ItemContentDate() {
	const { date } = useContextEvent();
	return (
		<div>
			<h2></h2>
		</div>
	);
}
