"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { EventType } from "@/lib/dummy.data";
import { transformDate } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";
import { useRouter } from "next/router";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	const date = transformDate(event.date);
	const router = useRouter();
	return (
		<div
			className="w-full"
			onClick={() => router.push(`/events/${event.id}`)}
		>
			<CardContainer
				aria-label="event-item-container"
				className="inter-var hover:cursor-pointer w-full"
			>
				<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border">
					<CardItem
						translateZ="25"
						className="text-xl font-bold text-neutral-600 dark:text-white"
					>
						{event.title}
					</CardItem>
					<CardItem
						as="p"
						translateZ="25"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
					>
						{event.location.province}
					</CardItem>
					<CardItem
						translateZ={50}
						translateX={10}
						className="text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 flex gap-3 items-center"
					>
						<CalendarDaysIcon className="size-4" />
						<h4>{date}</h4>
					</CardItem>
					<CardItem translateZ="150" className="w-full mt-4">
						<Image
							src={event.image}
							height="1000"
							width="1000"
							className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</CardItem>
				</CardBody>
			</CardContainer>
		</div>
	);
}
