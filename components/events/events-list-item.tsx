"use client";
import Image from "next/image";
import { EventType } from "@/lib/dummy.data";
import { transformDate } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";
import { useRouter } from "next/router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	const date = transformDate(event.date);
	const router = useRouter();
	return (
		<motion.div
			whileHover={{
				zoom: 1.05,
				boxShadow: "0.25rem 0.25rem 0.5rem 0.25rem hsl(var(--accent))",
			}}
			whileTap={{
				scale: 0.97,
			}}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			aria-label="motion-card-wrapper"
			className="w-full cursor-pointer"
			onClick={() => router.push(`/events/${event.id}`)}
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
					<Image
						src={event.image}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardContent>
			</Card>
		</motion.div>
	);
}
