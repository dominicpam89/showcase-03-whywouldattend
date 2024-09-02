import WordRotate from "@/components/ui-awesome/word-rotate";

interface Props {
	words: string[];
}
export default function ImageAnim({ words }: Props) {
	return (
		<WordRotate
			className="absolute top-[25%] left-[25%] -translate-x-[50%] -translate-y-[50%] text-4xl font-bold text-gray-100"
			words={words}
		/>
	);
}
