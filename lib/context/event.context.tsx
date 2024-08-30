import React, { createContext } from "react";
import { EventType } from "../dummy.data";
import { convertDateString, DateConciseType } from "../utils";

export type ContextEventType = {
	event: EventType;
	date: DateConciseType;
};
export const ContextEvent = createContext<ContextEventType | {}>({});

interface Props {
	event: EventType;
	children: React.ReactNode;
}
export default function ContextEventProvider({ event, children }: Props) {
	const date = convertDateString(event.date);
	return (
		<ContextEvent.Provider value={{ event, date }}>
			{children}
		</ContextEvent.Provider>
	);
}
