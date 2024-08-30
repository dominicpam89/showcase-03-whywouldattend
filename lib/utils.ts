import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function transformDate(dateString: string) {
	const date = new Date(dateString);
	const transformer = new Intl.DateTimeFormat("en", {
		dateStyle: "long",
	});
	if (date instanceof Date) {
		return transformer.format(date);
	} else throw new Error("The input date is not Date object");
}

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
