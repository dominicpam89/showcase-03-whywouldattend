import { useContext } from "react";
import { ContextEvent, ContextEventType } from "./event.context";

export const useContextEvent = () => {
	const context = useContext(ContextEvent);
	return context as ContextEventType;
};
