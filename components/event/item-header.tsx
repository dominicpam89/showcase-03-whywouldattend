import ItemHeaderText from "./item-header-text";
import ItemHeaderImage from "./item-header-image";
import ItemHeaderActions from "./item-header-actions";

export default function ItemHeader() {
	return (
		<header aria-label="event-detail-header">
			<ItemHeaderText />
			<ItemHeaderActions />
			<ItemHeaderImage />
		</header>
	);
}
