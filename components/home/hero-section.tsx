// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Compare } from "@/components/ui/compare";

export const HeroSection: FC = () => {
	return (
		<div className="px-8 md:px-12 bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black relative">
			<div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
				<div className="max-w-3xl">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
						Yes yes yes, everybody needs landing page. So here is mine.
					</h1>
					<p className="text-lg lg:text-xl text-muted-foreground mb-8">
						Well, it doesn&lsquo;t matter how beautiful my website is. For
						what matter is, how deep i understand javascript engine,
						tailoring with latest cool abomination javascript framework,
						and suplementating it with countless other abomination
						libraries dupped with typescript. Am i right?
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button size="lg" className="w-full sm:w-auto" asChild>
							<Link href="/events">
								😈 Click me, it won&lsquo;t bite!
							</Link>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="w-full sm:w-auto"
						>
							Another button idk what for
						</Button>
					</div>
					<p className="mt-8 text-sm text-gray-500">
						Try to drag image below, what a frontend guy.
					</p>
				</div>
				<Compare
					firstImage="/images/app-ss-01.png"
					secondImage="/images/app-ss-02.png"
					firstImageClassName="object-cover object-left-top"
					secondImageClassname="object-cover object-left-top"
					className="mt-12 max-h-[480px] w-full"
					slideMode="drag"
					showHandlebar
				/>
			</div>
		</div>
	);
};
