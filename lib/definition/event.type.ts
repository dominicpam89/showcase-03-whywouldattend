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

export type EventFormType = {
	title: string;
	subtitle: string;
	description: string;
	location: {
		city: string;
		province: string;
		zipCode: string;
	};
	date: string;
	image: File;
	isFeatured: boolean;
};

export type FeaturedEventType = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	isImageLeft: boolean;
};
