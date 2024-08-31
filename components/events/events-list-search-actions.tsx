import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Props {
	onClear: () => void;
}
export default function SearchActions({ onClear }: Props) {
	return (
		<div
			aria-label="events-list-search-actions"
			className="w-full flex flex-col gap-3 mb-12 md:flex-row lg:mb-0"
		>
			<Button className="w-full md:w-1/4">
				<Search className="mr-2 h-4 w-4" /> Search
			</Button>
			<Button
				className="w-full md:w-1/4"
				variant="outline"
				type="button"
				onClick={onClear}
			>
				<Search className="mr-2 h-4 w-4" /> Clear
			</Button>
		</div>
	);
}
