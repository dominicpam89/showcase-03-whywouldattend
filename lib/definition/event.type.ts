/**
 * Represents the structure of an event.
 *
 * @type {Object} EventType
 * @property {string} id - The unique identifier for the event.
 * @property {string} title - The title of the event.
 * @property {string} subtitle - A short subtitle for the event.
 * @property {string} description - A detailed description of the event.
 * @property {Object} location - The location of the event.
 * @property {string} location.city - The city where the event takes place.
 * @property {string} location.province - The province where the event takes place.
 * @property {string} location.zipCode - The zip code for the event location.
 * @property {string} date - The date of the event (ISO 8601 format).
 * @property {string} image - The image filename or URL associated with the event.
 * @property {boolean} isFeatured - Indicates whether the event is featured or not.
 */
export type EventType = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	location: {
		city: string;
		province: string;
		zipCode: string;
	};
	date: string;
	image: string;
	isFeatured: boolean;
};

/**
 * Represents the structure of the form data for creating or updating an event.
 *
 * @type {Object} EventFormType
 * @property {string} title - The title of the event.
 * @property {string} subtitle - A short subtitle for the event.
 * @property {string} description - A detailed description of the event.
 * @property {Object} location - The location of the event.
 * @property {string} location.city - The city where the event takes place.
 * @property {string} location.province - The province where the event takes place.
 * @property {string} location.zipCode - The zip code for the event location.
 * @property {string} date - The date of the event (ISO 8601 format).
 * @property {File} image - The image file for the event.
 * @property {boolean} isFeatured - Indicates whether the event is featured or not.
 */
export type EventFormType = {
	title: string;
	subtitle: string;
	description: string;
	location: {
		city: string;
		province: string;
		zipCode: string;
	};
	date: string;
	image: File;
	isFeatured: boolean;
};

/**
 * Represents the structure of a featured event.
 *
 * @type {Object} FeaturedEventType
 * @property {string} id - The unique identifier for the featured event.
 * @property {string} title - The title of the featured event.
 * @property {string} description - A brief description of the featured event.
 * @property {string} imageUrl - The URL of the image associated with the featured event.
 * @property {boolean} isImageLeft - Indicates if the image should be positioned on the left side in the UI.
 */
export type FeaturedEventType = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	isImageLeft: boolean;
};
