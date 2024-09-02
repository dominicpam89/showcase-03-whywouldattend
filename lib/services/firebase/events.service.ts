import { EventType } from "@/lib/definition/event.type";
import { db, storage } from "@/lib/firebase.config";
import { transformMonthArrayNumberToString } from "@/lib/utils";
import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const COLLECTION_NAME = "events";
const cols = collection(db, COLLECTION_NAME);
const STORAGE_REF = "showcase-3";

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
		const events: EventType[] = await Promise.all(
			snapshot.docs.map(async (doc) => {
				const event = doc.data() as EventType;
				const fileRef = ref(storage, STORAGE_REF.concat(event.image));
				const imageUrl = await getDownloadURL(fileRef);
				return { ...event, image: imageUrl };
			})
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

// READ ONE BY ID
export async function getEventById(eventId: string) {
	try {
		const eventRef = doc(db, COLLECTION_NAME, eventId);
		const eventDoc = await getDoc(eventRef);

		if (eventDoc.exists()) {
			const eventData = eventDoc.data() as EventType;
			const fileRef = ref(storage, STORAGE_REF.concat(eventData.image));
			const imageUrl = await getDownloadURL(fileRef);
			const event = { ...eventData, image: imageUrl } as EventType;
			return event;
		} else {
			throw new Error("Event not found");
		}
	} catch (error) {
		const err = new Error("Error fetching single document with given id");
		console.error("Error fetching document: ", error);
		throw {
			error: true,
			name: "get one event by id",
			message: "failed to get one event by id",
			data: err,
		} satisfies QueryResponseType<Error>;
	}
}

export async function getFilteredEvents(dateFilter: {
	year: number;
	month: number;
}) {
	const { year, month } = dateFilter;

	const { data: events } = await getEvents();

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventsYearsAndMonths() {
	const { data: events } = await getEvents();
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
