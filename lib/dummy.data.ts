const location = {
	city: "Somewhere in Heaven",
	province: "Olympus the Home of the Gods",
	zipCode: "12345",
};

const DUMMY_EVENTS = [
	{
		id: "e1",
		title: "Programming for everyone",
		subtitle:
			"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
		description:
			"This event is perfect for beginners who have little to no experience in coding. We will cover the essential concepts, introduce you to programming languages, and provide hands-on exercises to solidify your understanding. By the end of this session, you'll have a solid foundation and the confidence to continue your coding journey.",
		location: {
			city: "Somewhere in Heaven",
			province: "Olympus the Home of the Gods",
			zipCode: "12345",
		},
		date: "2021-05-12",
		image: "/images/event001.jpg",
		isFeatured: false,
	},
	{
		id: "e2",
		title: "Networking for introverts",
		subtitle:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		description:
			"This event is tailored for introverts who find traditional networking events overwhelming. We will provide strategies and techniques that make networking more approachable, helping you build meaningful connections in a comfortable environment. Whether you're looking to advance your career or simply expand your social circle, this event will equip you with the tools you need to succeed.",
		location: {
			city: "City of Lights",
			province: "Antarctic Monkeys Province",
			zipCode: "99887",
		},
		date: "2021-05-30",
		image: "/images/event002.jpg",
		isFeatured: true,
	},
	{
		id: "e3",
		title: "Networking for extroverts",
		subtitle:
			"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
		description:
			"While extroverts are natural networkers, this event focuses on helping you refine your networking approach. You'll learn how to channel your energy more effectively, make deeper connections, and avoid the pitfalls of over-networking. This session is designed to help you optimize your social interactions, whether at professional events or social gatherings.",
		location: {
			city: "Never Sleep City",
			province: "The Why, What, and Where Province",
			zipCode: "33447",
		},
		date: "2022-04-10",
		image: "/images/event003.jpg",
		isFeatured: true,
	},
];

export type EventType = (typeof DUMMY_EVENTS)[0];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id: string) {
	const event = DUMMY_EVENTS.find((event) => event.id === id);
	if (!event) return null;
	return event;
}
