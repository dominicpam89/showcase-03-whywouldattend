import fs from "fs/promises";
import path from "path";
import { transformMonthArrayNumberToString } from "@/lib/utils";
import { EventType } from "@/lib/definition/event.type";

const dummyEventsFilePath = path.join(
	process.cwd(),
	"lib",
	"data",
	"dummy-events.json"
);

export async function getAllEvents() {
	const jsonFile = await fs.readFile(dummyEventsFilePath, {
		encoding: "utf-8",
	});
	const data = JSON.parse(jsonFile);
	return data as EventType[];
}

export async function getFeaturedEvents() {
	const events = await getAllEvents();
	return events.filter((event) => event.isFeatured);
}

export async function getEventsYearsAndMonths() {
	const events = await getAllEvents();
	if (events.length == 0) return null;
	const dates = events.map((event) => {
		const year = new Date(event.date).getFullYear();
		const month = new Date(event.date).getMonth() + 1;
		return { year, month };
	});
	const yearsSet = new Set(dates.map((date) => date.year));
	const years = Array.from(yearsSet);

	const monthNums = dates.map((date) => date.month).sort((a, b) => a - b);
	const monthsArray = Array.from(new Set(monthNums));
	const months = transformMonthArrayNumberToString(monthsArray);
	return { years, months };
}
export type GetEventsYearsAndMonthsReturn = {
	years: number[];
	months: string[];
};

export async function getFilteredEvents(dateFilter: {
	year: number;
	month: number;
}) {
	const { year, month } = dateFilter;

	const events = await getAllEvents();

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventById(id: string) {
	const events = await getAllEvents();
	const event = events.find((event) => event.id === id);
	if (!event) return null;
	return event;
}
