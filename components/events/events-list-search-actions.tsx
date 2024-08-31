import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Props {
	onClear: () => void;
}
export default function SearchActions({ onClear }: Props) {
	return (
		<div
			aria-label="events-list-search-actions"
			className="w-full flex flex-col sm:flex-row gap-2"
		>
			<Button className="w-full md:w-[120px]">
				<Search className="mr-2 h-4 w-4" /> Search
			</Button>
			<Button
				className="w-full md:w-[120px]"
				variant="outline"
				type="button"
				onClick={onClear}
			>
				Clear
			</Button>
		</div>
	);
}
