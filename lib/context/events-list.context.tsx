import { EventType } from "@/lib/definition/event.type";
import { GetEventsYearsAndMonthsReturn } from "@/lib/services/firebase/events.service";
import React, { createContext } from "react";

export type ContextEventsListType = {
	events: EventType[];
	eventDates: GetEventsYearsAndMonthsReturn;
	dateSelect: { yy: string; mm: string };
};

export const ContextEventsList = createContext<ContextEventsListType | {}>({});

export default function ContextEventsListProvider({
	children,
	...props
}: ContextEventsListType & { children: React.ReactNode }) {
	return (
		<ContextEventsList.Provider value={{ ...props }}>
			{children}
		</ContextEventsList.Provider>
	);
}
