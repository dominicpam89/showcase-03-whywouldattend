import React from "react";
import useImageLoader from "@/lib/hooks/image.hook";
import { Skeleton } from "@/components/ui/skeleton";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
}

const LoadingUI = () => {
	return <Skeleton className="h-full min-h-[320px] w-full" />;
};

const ImageComp: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {
	const { isLoading, hasError } = useImageLoader(src);

	if (hasError) {
		return (
			<div
				className={
					"flex flex-col gap-1 justify-center items-center h-auto w-full"
				}
			>
				<h2 className="text-destructive font-extrabold text-2xl">
					No Image
				</h2>
				<p className="text-destructive">Couldn&apos;t fetch image</p>
			</div>
		);
	}

	return (
		<>
			{isLoading && <LoadingUI />}
			<img
				src={src}
				alt={alt}
				style={{ display: isLoading ? "none" : "block" }}
				{...props}
			/>
		</>
	);
};

export default ImageComp;
