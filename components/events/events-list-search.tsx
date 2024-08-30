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
			<Select key="years">
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Year" />
				</SelectTrigger>
				<SelectContent>
					{years.map((year) => (
						<SelectItem key={year} value={year.toString()}>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select key="months">
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Month" />
				</SelectTrigger>
				<SelectContent>
					{months.map((month) => (
						<SelectItem key={month} value={month}>
							{month}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
