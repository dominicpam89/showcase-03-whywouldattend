import React from "react";
import useImageLoader from "@/lib/hooks/image.hook";
import { Skeleton } from "@/components/ui/skeleton";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const ImageComp: React.FC<CustomImageProps> = ({
	src,
	alt,
	width,
	height,
	...props
}) => {
	const { isLoading, hasError } = useImageLoader(src);

	if (hasError) {
		return (
			<div
				className={`h-[${height}px] w-[${width}px] flex justify-center items-center`}
			>
				<p className="text-destructive">Couldn't fetch image</p>
			</div>
		);
	}

	return (
		<>
			{isLoading && (
				<Skeleton className={`h-[${height}px] w-[${width}px]`} />
			)}
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				style={{ display: isLoading ? "none" : "block" }}
				{...props}
			/>
		</>
	);
};

export default ImageComp;
