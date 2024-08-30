"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { EventType } from "@/lib/dummy.data";
import { Button } from "@/components/ui/button";
import { transformDate } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	const date = transformDate(event.date);
	console.log(date);
	return (
		<CardContainer aria-label="event-item-container" className="inter-var">
			<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
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
					{event.location}
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
				<div className="flex justify-center items-center mt-8">
					<Button variant="link" className="w-full">
						<CardItem
							translateZ={50}
							as={Link}
							href={`events/${event.id}`}
							target="__blank"
							// className="px-4 py-2 rounded-xl text-sm font-normal hover:font-semibold hover:underline"
						>
							See Event detail
						</CardItem>
					</Button>
				</div>
			</CardBody>
		</CardContainer>
	);
}
