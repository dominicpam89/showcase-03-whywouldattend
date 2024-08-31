import { FlipWords } from "@/components/ui/flip-words";

export default function EventsListHeading() {
	const words = ["Networking", "Bootcamps", "Concerts"];
	return (
		<div
			aria-label="events-list-heading"
			className="h-[16rem] flex justify-center items-center px-8 lg:px-4"
		>
			<div className="flex flex-col gap-4 mx-auto font-normal text-neutral-700 dark:text-neutral-300">
				<span className="text-xl">All Listing</span>
				<div className="text-5xl hidden lg:block">
					<FlipWords words={words} duration={500} /> <br />
				</div>
				<div className="text-5xl lg:hidden">
					<span className="text-neutral-900 dark:text-neutral-100 font-extrabold">
						Events
					</span>{" "}
					<br />
				</div>
				<span>events which i know it is not useful for you!</span>
			</div>
		</div>
	);
}
