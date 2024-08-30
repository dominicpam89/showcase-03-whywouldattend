import React from "react";
import { getEventsYearsAndMonths } from "@/lib/dummy.data";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function EventsListSearch() {
	const { years, months } = getEventsYearsAndMonths();
	return (
		<form aria-label="events-search" className="px-8 lg:px-16 flex gap-2">
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
			<Button>
				<Search className="mr-2 h-4 w-4" /> Search
			</Button>
		</form>
	);
}
