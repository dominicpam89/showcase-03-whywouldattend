import { motion, Variants } from "framer-motion";

const h1Vars: Variants = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const paragVars: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

export default function EventsListEmpty() {
	return (
		<div
			aria-label="events-list-empty-container"
			className="p-8 lg:p-12 w-full flex flex-col items-center overflow-hidden"
		>
			<motion.h1
				variants={h1Vars}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{
					duration: 0.8,
				}}
				className="font-extrabold text-2xl lg:text-4xl"
			>
				No Event
			</motion.h1>
			<motion.p
				variants={paragVars}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ delay: 0.15, duration: 0.8 }}
				className="font-light text-sm lg:text-lg"
			>
				Couldn&apos;t find event on respective year & month
			</motion.p>
		</div>
	);
}
