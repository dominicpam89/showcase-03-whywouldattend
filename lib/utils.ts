import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using `clsx` and `tailwind-merge`.
 *
 * @function cn
 * @param {...ClassValue[]} inputs - An array of class values to be merged.
 * @returns {string} - The merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Transforms a date string into a readable, long-form date format.
 *
 * @function transformDate
 * @param {string} dateString - The date string in ISO 8601 format.
 * @returns {string} - The transformed date in long format.
 * @throws {Error} - If the input date is not a valid `Date` object.
 */
export function transformDate(dateString: string) {
	const date = new Date(dateString);
	const transformer = new Intl.DateTimeFormat("en", {
		dateStyle: "long",
	});
	if (date instanceof Date) {
		return transformer.format(date);
	} else throw new Error("The input date is not Date object");
}

/**
 * Converts a date string into an object containing the year, month, day, and date.
 *
 * @function convertDateString
 * @param {string} dateString - The date string in ISO 8601 format.
 * @returns {Object} - An object containing the formatted date components.
 * @returns {string} year - The year of the date.
 * @returns {string} month - The month in long format.
 * @returns {number} date - The day of the month.
 * @returns {string} day - The day of the week.
 */
export function convertDateString(dateString: string): {
	year: string;
	month: string;
	date: number;
	day: string;
} {
	const dateObj = new Date(dateString);

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "2-digit",
		weekday: "long",
	};

	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
		dateObj
	);

	const [dayRaw, month, date, year] = formattedDate.split(" ");
	const day = dayRaw.split(",")[0];
	return {
		year,
		month,
		date: parseInt(date.replace(",", "")),
		day,
	};
}
export type DateConciseType = ReturnType<typeof convertDateString>;

/**
 * A constant string representing basic tailwind style classes to inject in a root component in each page of nextjs.
 *
 * @constant {string}
 */
export const styleClassesInjection = `font-sans bg-background text-foreground`;

export const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

/**
 * Transforms an array of month numbers into their corresponding month names.
 *
 * @function transformMonthArrayNumberToString
 * @param {number[]} months - An array of month numbers (1-12).
 * @returns {string[]} - An array of corresponding month names.
 */
export const transformMonthArrayNumberToString = (months: number[]) => {
	return months.map((month) => monthNames[month - 1]);
};

/**
 * Transforms a month name string into its corresponding month number.
 *
 * @function transformMonthStringToNumber
 * @param {string} month - The month name (e.g., "January").
 * @returns {number | null} - The corresponding month number (1-12), or null if not found.
 */
export const transformMonthStringToNumber = (month: string): number | null => {
	const monthIndex = monthNames.indexOf(month);
	if (monthIndex === -1) {
		return null;
	}
	return monthIndex + 1;
};
