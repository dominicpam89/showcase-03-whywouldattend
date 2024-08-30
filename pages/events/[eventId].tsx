import { useRouter } from "next/router";

export default function Page() {
	const router = useRouter();
	const eventId = router.query.eventId;
	return (
		<div>
			<h1>Event Detail Here</h1>
			<p>EventId: {eventId}</p>
		</div>
	);
}
