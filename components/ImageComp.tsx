import React from "react";
import useImageLoader from "@/lib/hooks/image.hook"; // Adjust the path according to your project structure
import { Skeleton } from "@/components/ui/skeleton";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	width: number;
	height: number;
	placeholder?: string; // Optional placeholder image
}

const ImageComp: React.FC<CustomImageProps> = ({
	src,
	alt,
	width,
	height,
	placeholder,
	...props
}) => {
	const { isLoading, hasError } = useImageLoader(src);

	if (hasError) {
		return <div>Error loading image</div>;
	}

	return (
		<>
			{isLoading && placeholder && (
				<Skeleton className={`h-[${height}] w-[${width}]`} />
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
