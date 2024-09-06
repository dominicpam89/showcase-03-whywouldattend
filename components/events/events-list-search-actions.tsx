import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Props {
	onClear: () => void;
}
export default function SearchActions({ onClear }: Props) {
	return (
		<div
			aria-label="events-list-search-actions"
			className="w-full flex flex-row gap-2"
		>
			<Button
				className="w-full"
				variant="outline"
				type="button"
				onClick={onClear}
			>
				Clear
			</Button>
			<Button className="w-full">
				<Search className="mr-2 h-4 w-4" /> Search
			</Button>
		</div>
	);
}
