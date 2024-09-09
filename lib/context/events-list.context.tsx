import { EventType } from "@/lib/definition/event.type";
import { GetEventsYearsAndMonthsReturn } from "@/lib/services/firebase/events.service";
import React, { createContext } from "react";

/**
 * Defines the context type for the events list.
 *
 * @type {Object} ContextEventsListType
 * @property {EventType[]} events - An array of events.
 * @property {GetEventsYearsAndMonthsReturn} eventDates - Available years and months for the events.
 * @property {{ yy: string; mm: string }} dateSelect - Selected year (yy) and month (mm) for filtering events.
 */
export type ContextEventsListType = {
	events: EventType[];
	eventDates: GetEventsYearsAndMonthsReturn;
	dateSelect: { yy: string; mm: string };
};

export const ContextEventsList = createContext<ContextEventsListType | {}>({});

/**
 * Context provider component for the events list.
 *
 * @component
 * @param {ContextEventsListType & { children: React.ReactNode }} props - The props for the context provider.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the context provider.
 * @param {EventType[]} props.events - An array of events.
 * @param {GetEventsYearsAndMonthsReturn} props.eventDates - Available years and months for the events.
 * @param {{ yy: string; mm: string }} props.dateSelect - Selected year and month for filtering events.
 * @returns {JSX.Element} The context provider component.
 */
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
