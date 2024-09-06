import React, { ImgHTMLAttributes, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
export default function ImageUI({ ...props }: Props) {
	const [imageLoading, setImageLoading] = useState(true);
	const handleImageLoading = (o: boolean) => {
		setImageLoading(o);
	};
	return (
		<>
			<Skeleton
				className={`${imageLoading ? "w-full h-full" : "w-0 h-0"}`}
			/>
			<img
				{...props}
				className={`w-full h-full object-cover object-left-bottom transition-all duration-300 ease-in-out ${
					imageLoading
						? "pointer-events-none opacity-0"
						: "opacity-100 pointer-events-auto"
				}`}
				onLoadStart={() => handleImageLoading(true)}
				onLoad={() => handleImageLoading(false)}
			/>
		</>
	);
}
