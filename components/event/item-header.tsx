import ItemHeaderText from "./item-header-text";
import ItemHeaderImage from "./item-header-image";

export default function ItemHeader() {
	return (
		<header aria-label="event-detail-header">
			<ItemHeaderText />
			<ItemHeaderImage />
		</header>
	);
}
