import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useContextEvent } from "@/lib/context/event.context.hook";
import { motion } from "framer-motion";

export default function ItemHeaderText() {
	const { event } = useContextEvent();
	return (
		<HeroHighlight className="p-12">
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-lg px-4 md:text-2xl lg:text-3xl font-bold text-neutral-500 dark:text-neutral-700 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				{event.subtitle}
				<Highlight className="text-neutral-800 dark:text-neutral-100 text-2xl lg:text-5xl">
					{event.title}
				</Highlight>
			</motion.h1>
		</HeroHighlight>
	);
}
