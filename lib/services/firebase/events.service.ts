import { EventType } from "@/lib/definition/event.type";
import { db, storage } from "@/lib/firebase.config";
import { monthNames } from "@/lib/utils";
import {
	collection,
	query,
	getDocs,
	doc,
	getDoc,
	where,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

/**
 * Firebase Firestore collection name for events.
 * @constant {string}
 */
const COLLECTION_NAME = "events";

/**
 * Firestore collection reference for events.
 * @constant {CollectionReference}
 */
const cols = collection(db, COLLECTION_NAME);

/**
 * Firebase storage reference path for images.
 * @constant {string}
 */
const STORAGE_REF = "showcase-3";

/**
 * A type representing the structure of a query response.
 * @template T
 * @type {Object} QueryResponseType
 * @property {boolean} error - Indicates if there was an error.
 * @property {string} name - The name or description of the query.
 * @property {string} message - A descriptive message about the query outcome.
 * @property {T | null} data - The data returned from the query, or null in case of an error.
 */
export type QueryResponseType<T> = {
	error: boolean;
	name: string;
	message: string;
	data: T | null;
};

/**
 * Fetches all events from Firestore.
 *
 * @async
 * @function getEvents
 * @returns {Promise<QueryResponseType<EventType[]>>} - A promise that resolves to the query result containing a list of events.
 * @throws {Error} - If the query fails or no data is found.
 */
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
		if (events)
			return {
				error: false,
				name: "query success",
				message: "successfully fetch events list",
				data: events,
			} satisfies QueryResponseType<EventType[]>;
		else throw new Error("No data found");
	} catch (error) {
		throw error as Error;
	}
}

/**
 * Fetches a single event by its ID from Firestore.
 *
 * @async
 * @function getEventById
 * @param {string} eventId - The ID of the event to fetch.
 * @returns {Promise<EventType>} - A promise that resolves to the event data.
 * @throws {QueryResponseType<Error>} - If the event is not found or the query fails.
 */
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

/**
 * Filters events based on the provided date filter (year and month).
 *
 * @async
 * @function getFilteredEvents
 * @param {{ year: number; month: number }} dateFilter - The filter object containing year and month to filter events.
 * @returns {Promise<EventType[]>} - A promise that resolves to a list of filtered events.
 */
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

/**
 * Fetches all featured events from Firestore.
 *
 * @async
 * @function getFeaturedEvents
 * @returns {Promise<QueryResponseType<EventType[]>>} - A promise that resolves to the query result containing a list of featured events.
 * @throws {QueryResponseType<Error>} - If the query fails.
 */
export async function getFeaturedEvents() {
	try {
		const q = query(cols, where("isFeatured", "==", true));
		const snapshot = await getDocs(q);
		const events: EventType[] = await Promise.all(
			snapshot.docs.map(async (doc) => {
				const event = doc.data() as EventType;
				const imageRef = ref(storage, STORAGE_REF.concat(event.image));
				const imageUrl = await getDownloadURL(imageRef);
				return { ...event, image: imageUrl };
			})
		);
		if (events)
			return {
				error: false,
				name: "query success",
				message: "successfully fetch events list",
				data: events,
			} satisfies QueryResponseType<EventType[]>;
		else throw new Error("No data found");
	} catch (error) {
		throw {
			error: true,
			name: "get featured events",
			message: "failed to get featured events",
			data: error,
		};
	}
}

/**
 * Fetches available years and months for events.
 *
 * @async
 * @function getEventsYearsAndMonths
 * @returns {Promise<GetEventsYearsAndMonthsReturn>} - A promise that resolves to an object containing available years and months for events.
 */
export async function getEventsYearsAndMonths() {
	const years = await getEventsYears();
	const months = getEventsMonths();
	return { years, months };
}

/**
 * A return type for the getEventsYearsAndMonths function.
 * @type {Object} GetEventsYearsAndMonthsReturn
 * @property {number[]} years - An array of available years for events.
 * @property {string[]} months - An array of available months for events.
 */
export type GetEventsYearsAndMonthsReturn = {
	years: number[];
	months: string[];
};

/**
 * Fetches available years for events from Firestore.
 *
 * @async
 * @function getEventsYears
 * @returns {Promise<number[] | null>} - A promise that resolves to an array of available years for events or null if no events are found.
 */
export async function getEventsYears() {
	const { data: events } = await getEvents();
	if (events.length == 0) return null;
	const eventYears = events.map((event) => {
		const year = new Date(event.date).getFullYear();
		return year;
	});
	const yearsSet = new Set(eventYears);
	const years = Array.from(yearsSet);
	return years;
}

/**
 * Fetches available months for events.
 *
 * @function getEventsMonths
 * @returns {string[]} - An array of available months for events.
 */
export function getEventsMonths() {
	return monthNames;
}
