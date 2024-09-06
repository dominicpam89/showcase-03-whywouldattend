import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import { AirplayIcon } from "lucide-react";
import EventsListSearchForm from "./events-list-search-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

export default function EventsListSearch() {
	const contentItemClasses = "px-6 md:px-24 lg:px-36";
	const [open, setOpen] = useState(false);
	const onOpenChange = (o: boolean) => setOpen(o);
	const router = useRouter();
	const isEvents = router.pathname == "/events";
	return (
		<div
			aria-label="events-list-search-container"
			className="px-8 lg:px-16 w-full lg:w-1/3 lg:ml-auto flex gap-2 items-center"
		>
			{!isEvents && (
				<Button
					variant="outline"
					className="w-full"
					onClick={() => router.push("/events")}
				>
					View All
				</Button>
			)}
			<Drawer open={open} onOpenChange={onOpenChange}>
				<DrawerTrigger
					className={cn(
						"w-full flex gap-1 items-center justify-center",
						buttonVariants({ variant: "default" })
					)}
				>
					<AirplayIcon />
					Search Events
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className={`mt-24 ${contentItemClasses}`}>
						<DrawerTitle>Hit Search once you&apos;ve done</DrawerTitle>
						<DrawerDescription>
							Search based on years and months
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter className={`pb-24 ${contentItemClasses}`}>
						<EventsListSearchForm onOpenChange={onOpenChange} />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
