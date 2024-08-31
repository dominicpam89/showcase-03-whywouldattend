import { EventType } from "@/lib/dummy.data";
import EventItem from "./events-list-item";
import EventsListHeading from "./events-list-heading";
import EventsListSearch from "./events-list-search";
import { motion, Variants, AnimatePresence } from "framer-motion";

interface Props {
	events: EventType[];
}

const eventsListContainerVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const eventsListItemVariants: Variants = {
	hidden: {
		y: 50,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function EventsList({ events }: Props) {
	return (
		<div aria-label="list-container" className="flex flex-col gap-6">
			<EventsListHeading />
			<EventsListSearch />
			<motion.div
				variants={eventsListContainerVariants}
				initial={"hidden"}
				animate={"visible"}
				aria-label="events-list-container"
				className="px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
			>
				<AnimatePresence>
					{events.map((event) => (
						<motion.div
							key={event.id}
							variants={eventsListItemVariants}
							aria-label="motion-card-wrapper"
							className="w-full cursor-pointer"
						>
							<EventItem event={event} />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}
