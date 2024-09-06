import React from "react";

interface Props {
	icon: React.ReactNode;
	label: string;
	text: string;
}
export default function LocationItem({ icon, label, text }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<span className="font-bold text-xl flex gap-2 items-center">
				{icon}
				<span>{label}</span>
			</span>
			<span className="text-gray-600 dark:text-gray-500 font-light text-xl">
				{text}
			</span>
		</div>
	);
}
