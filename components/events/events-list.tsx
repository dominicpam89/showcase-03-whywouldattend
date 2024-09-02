import { EventType } from "@/lib/definition/event.type";
import EventItem from "./events-list-item";
import EventsListHeading from "./events-list-heading";
import EventsListSearch from "./events-list-search";
import { motion, Variants, AnimatePresence } from "framer-motion";
import EventsListEmpty from "./events-list-empty";
import { GetEventsYearsAndMonthsReturn } from "@/lib/services/dummy-events.service";

interface Props {
	events: EventType[];
	eventDates: GetEventsYearsAndMonthsReturn;
	dateSelect: {
		yy: string;
		mm: string;
	};
	withSearch?: boolean;
	withHeader?: boolean;
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

export default function EventsList({
	events,
	eventDates,
	dateSelect,
	withSearch = true,
	withHeader = true,
}: Props) {
	return (
		<div aria-label="list-container" className="flex flex-col gap-6">
			<AnimatePresence>
				{withHeader && <EventsListHeading key="events-list-heading" />}
				{withSearch && (
					<EventsListSearch
						key="events-list-search"
						eventDates={eventDates!}
						dateSelect={dateSelect}
					/>
				)}
				{events.length == 0 && <EventsListEmpty key="events-list-empty" />}
				<motion.div
					key="events-list-container-animation"
					variants={eventsListContainerVariants}
					initial="hidden"
					animate="visible"
					aria-label="events-list-container"
					className="px-8 py-12 pt-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
				>
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
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
