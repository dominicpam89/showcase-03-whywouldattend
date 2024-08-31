import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
	return (
		<Select
			key="years"
			onValueChange={field.onChange}
			defaultValue={field.value}
		>
			<SelectTrigger className="w-full">
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
