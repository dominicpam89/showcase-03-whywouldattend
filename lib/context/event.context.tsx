import React, { createContext } from "react";
import { EventType } from "../dummy.data";

export type ContextEventType = {
	event: EventType;
};
export const ContextEvent = createContext<ContextEventType | {}>({});

interface Props {
	event: EventType;
	children: React.ReactNode;
}
export default function ContextEventProvider({ event, children }: Props) {
	return (
		<ContextEvent.Provider value={{ event }}>
			{children}
		</ContextEvent.Provider>
	);
}
