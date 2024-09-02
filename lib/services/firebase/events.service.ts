import { EventType } from "@/lib/definition/event.type";
import { db } from "@/lib/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

const COLLECTION_NAME = "events";
const cols = collection(db, COLLECTION_NAME);

export type QueryResponseType<T> = {
	error: boolean;
	name: string;
	message: string;
	data: T | null;
};

// READ
export async function getEvents() {
	try {
		const q = query(cols);
		const snapshot = await getDocs(q);
		const events: EventType[] = snapshot.docs.map(
			(doc) => doc.data() as EventType
		);
		let data = null;
		if (events) data = events;
		if (data)
			return {
				error: false,
				name: "query success",
				message: "successfully fetch events list",
				data,
			} satisfies QueryResponseType<EventType[]>;
		else throw new Error("No data found");
	} catch (error) {
		throw error as Error;
	}
}
