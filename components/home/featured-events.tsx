import { FeaturedEventType } from "@/lib/definition/event.type";
import FeaturedEventsItem from "./featured-events-item";
import TypingAnimation from "../ui-awesome/typing-animation";

interface Props {
	events: FeaturedEventType[];
}

export default function FeaturedEvents({ events }: Props) {
	return (
		<div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
			<div className="mx-auto max-w-2xl text-center mb-16">
				<h2 className="text-base font-semibold leading-7 text-primary">
					Oh wow this feature section again, duh.
				</h2>
				<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
					I should write something nice so client will have interest in me.
				</p>
				<TypingAnimation
					className="text-base font-light leading-6 tracking-wide"
					text="WhyWouldAttend is a website to showcase my mastery in nextjs,
					another abomination of complex javascript framework. Now, similar
					to Laravel, fullstack framework, which accomodates the web
					developer to learn again and again each and every night to buy
					lambo at 60's, hopefully, with little bit miracle. Enjoy my
					website that display events from firestore integration with
					prefetch. Right?!"
				></TypingAnimation>
			</div>
			<div className="mt-8 flex flex-col gap-16">
				{events.map((event, index) => (
					<FeaturedEventsItem key={index} {...event} />
				))}
			</div>
		</div>
	);
}
