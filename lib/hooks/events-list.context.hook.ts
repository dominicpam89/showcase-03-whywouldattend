import { useContext } from "react";
import {
	ContextEventsList,
	ContextEventsListType,
} from "@/lib/context/events-list.context";

export const useContextEventsList = () => {
	const context = useContext(ContextEventsList);
	return context as ContextEventsListType;
};
