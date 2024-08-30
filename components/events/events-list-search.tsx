import React from "react";
import { getEventsYearsAndMonths } from "@/lib/dummy.data";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function EventsListSearch() {
	const { years, months } = getEventsYearsAndMonths();

	return (
		<div aria-label="events-search" className="px-8 lg:px-16 flex gap-2">
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Year" />
				</SelectTrigger>
				<SelectContent>
					{years.map((year) => (
						<SelectItem value={year}>{year}</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Month" />
				</SelectTrigger>
				<SelectContent>
					{months.map((month) => (
						<SelectItem value={month}>{month}</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
