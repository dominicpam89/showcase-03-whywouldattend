"use client";
import { EventType } from "@/lib/definition/event.type";
import { transformDate } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageComp from "@/components/ImageComp";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	const date = transformDate(event.date);
	return (
		<motion.div
			whileHover={{
				zoom: 1.03,
				boxShadow: "0.25rem 0.25rem 0.5rem 0.25rem hsl(var(--accent))",
			}}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			aria-label="motion-card-wrapper"
			className="w-full hover:cursor-auto"
		>
			<Card
				aria-label="event-list-item"
				className="w-full p-0 md:p-6 lg:p-4 xl:p-6"
			>
				<CardHeader>
					<CardTitle>{event.title}</CardTitle>
					<CardDescription>{event.location.province}</CardDescription>
					<div className="flex gap-2 items-center">
						<CalendarDaysIcon className="size-4" />
						<h4>{date}</h4>
					</div>
				</CardHeader>
				<CardContent>
					<ImageComp
						src={event.image}
						height={1000}
						width={1000}
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardContent>
				<CardFooter>
					<Button asChild className="w-full">
						<Link href={`/events/${event.id}`}>Check the details</Link>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
