export type EventType = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	location: {
		city: string;
		province: string;
		zipCode: string;
	};
	date: string;
	image: string;
	isFeatured: boolean;
};
