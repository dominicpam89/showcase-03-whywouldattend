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
