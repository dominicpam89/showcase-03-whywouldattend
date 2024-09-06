import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues, K extends FieldPath<T>> {
	field: ControllerRenderProps<T, K>;
	vals: string[] | number[];
	placeholder: string;
}
export default function SearchSelect<
	T extends FieldValues,
	K extends FieldPath<T>
>({ field, vals, placeholder }: Props<T, K>) {
	const [open, setOpen] = React.useState(false);
	const onOpenChange = (o: boolean) => setOpen(o);
	return (
		<Select
			key="years"
			onValueChange={field.onChange}
			defaultValue={field.value}
			value={field.value}
			open={open}
			onOpenChange={onOpenChange}
		>
			<SelectTrigger className="w-full" onClick={() => onOpenChange(true)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{vals.map((val) => (
					<SelectItem key={val} value={val.toString()}>
						{val}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
