import React from "react";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	Controller,
} from "react-hook-form";
import SearchSelect from "./events-list-search-select";
import SearchErrorUI from "./events-list-search-error-ui";
import SearchActions from "./events-list-search-actions";
import { useRouter } from "next/router";
import { useContextEventsList } from "@/lib/hooks/events-list.context.hook";

interface Props {
	onOpenChange: (o: boolean) => void;
}
export default function EventsListSearchForm({ onOpenChange }: Props) {
	const { eventDates, dateSelect } = useContextEventsList();
	const { years, months } = eventDates;
	const defaultYear = dateSelect?.yy || "";
	const defaultMonth = dateSelect?.mm || "";
	const router = useRouter();
	type FormType = { year: string; month: string };
	const methods = useForm<FormType>({
		defaultValues: {
			year: defaultYear,
			month: defaultMonth,
		},
		mode: "onSubmit",
	});
	const { errors } = methods.formState;
	const onValid: SubmitHandler<FormType> = (data) => {
		router.push(`/events/${data.year}/${data.month}`);
		onOpenChange(false);
	};
	const onClear = () => {
		methods.resetField("year", { defaultValue: defaultYear });
		methods.resetField("month", { defaultValue: defaultMonth });
		router.push("/events");
		onOpenChange(false);
	};
	return (
		<FormProvider {...methods}>
			<form
				aria-label="events-search"
				className="flex flex-col gap-5"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<Controller
					control={methods.control}
					name="year"
					rules={{
						required: { value: true, message: "Year is required" },
					}}
					render={({ field }) => (
						<SearchSelect<FormType, "year">
							field={field}
							vals={years}
							placeholder="Select Year"
						/>
					)}
				/>
				<Controller
					control={methods.control}
					name="month"
					rules={{
						required: { value: true, message: "Month is required" },
					}}
					render={({ field }) => (
						<SearchSelect<FormType, "month">
							field={field}
							vals={months}
							placeholder="Select Month"
						/>
					)}
				/>
				<SearchActions onClear={onClear} />
				{errors.year && !errors.month && (
					<SearchErrorUI message={errors.year.message!} />
				)}
				{errors.month && !errors.year && (
					<SearchErrorUI message={errors.month.message!} />
				)}
				{errors.year && errors.month && (
					<SearchErrorUI message={"Months and years are required!"} />
				)}
			</form>
		</FormProvider>
	);
}
