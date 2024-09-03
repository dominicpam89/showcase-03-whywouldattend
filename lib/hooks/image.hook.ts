import { useState, useEffect, useCallback } from "react";

function useImageLoader(src: string) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [hasError, setHasError] = useState<boolean>(false);

	const handleLoadStart = useCallback(() => {
		setIsLoading(true);
		setHasError(false);
	}, []);

	const handleLoad = useCallback(() => {
		setIsLoading(false);
	}, []);

	const handleError = useCallback(() => {
		setIsLoading(false);
		setHasError(true);
	}, []);

	useEffect(() => {
		const img = new Image();
		img.src = src;

		img.onloadstart = handleLoadStart;
		img.onload = handleLoad;
		img.onerror = handleError;

		return () => {
			img.onloadstart = null;
			img.onload = null;
			img.onerror = null;
		};
	}, [src, handleLoadStart, handleLoad, handleError]);

	return { isLoading, hasError };
}

export default useImageLoader;
