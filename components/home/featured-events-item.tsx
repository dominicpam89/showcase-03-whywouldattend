import { Button } from "@/components/ui/button";
import { FeaturedEventType } from "@/lib/definition/event.type";
import { FC } from "react";
import ImageAnim from "./featured-events-image-anim";
import { useRouter } from "next/router";
import ImageUI from "@/components/Image";

const FeaturedEventsItem: FC<FeaturedEventType> = ({
	id,
	title,
	description,
	imageUrl,
	isImageLeft,
}) => {
	const router = useRouter();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
			{isImageLeft && (
				<div className="relative order-1 md:order-1">
					<div
						aria-label="image-container"
						className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
					>
						<ImageUI
							src={imageUrl}
							alt={title}
							height={320}
							width={240}
						/>
					</div>
					<ImageAnim words={["yeah?", "hire me for $100 perhour?"]} />
				</div>
			)}
			<div
				className={`order-2 ${isImageLeft ? "md:order-2" : "md:order-1"}`}
			>
				<h3 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
					{title}
				</h3>
				<p className="mt-6 text-lg leading-8 text-muted-foreground">
					{description}
				</p>
				<div className="mt-4">
					<Button
						variant="secondary"
						onClick={() => router.push(`/events/${id}`)}
					>
						Learn more
					</Button>
				</div>
			</div>
			{!isImageLeft && (
				<div className="relative order-1 md:order-2">
					<div
						aria-label="image-container"
						className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
					>
						<ImageUI
							src={imageUrl}
							alt={title}
							height={320}
							width={240}
						/>
					</div>
					<ImageAnim words={["what?", "turn me into CEO?"]} />
				</div>
			)}
		</div>
	);
};

export default FeaturedEventsItem;
