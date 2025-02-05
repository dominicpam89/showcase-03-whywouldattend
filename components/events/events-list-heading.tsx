import { FlipWords } from "@/components/ui/flip-words";

export default function EventsListHeading() {
	const words = ["Networking", "Bootcamps", "Concerts"];
	return (
		<div
			aria-label="events-list-heading"
			className="h-[16rem] flex justify-center items-center px-8 lg:px-4"
		>
			<div className="flex flex-col gap-2 lg:gap-4 mx-auto font-normal text-neutral-700 dark:text-neutral-300">
				<span className="text-xl">All Listing</span>
				<div className="text-3xl lg:text-5xl">
					<FlipWords words={words} duration={500} /> <br />
				</div>
				<span>events which i know it is not useful for you!</span>
			</div>
		</div>
	);
}
