import React, { createContext } from "react";
import { EventType } from "@/lib/definition/event.type";
import { convertDateString, DateConciseType } from "@/lib/utils";

/**
 * Defines the context type for a single event.
 *
 * @type {Object} ContextEventType
 * @property {EventType} event - The event object containing details of the event.
 * @property {DateConciseType} date - A concise formatted date derived from the event date.
 */
export type ContextEventType = {
	event: EventType;
	date: DateConciseType;
};
export const ContextEvent = createContext<ContextEventType | {}>({});

/**
 * Props for the `ContextEventProvider` component.
 *
 * @type {Object} Props
 * @property {EventType} event - The event object containing details of the event.
 * @property {React.ReactNode} children - The child components to be wrapped by the context provider.
 */
interface Props {
	event: EventType;
	children: React.ReactNode;
}

/**
 * Context provider component for a single event.
 *
 * @component
 * @param {Props} props - The props for the context provider.
 * @param {EventType} props.event - The event object containing details of the event.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the context provider.
 * @returns {JSX.Element} The context provider component.
 */
export default function ContextEventProvider({ event, children }: Props) {
	const date = convertDateString(event.date);
	return (
		<ContextEvent.Provider value={{ event, date }}>
			{children}
		</ContextEvent.Provider>
	);
}
