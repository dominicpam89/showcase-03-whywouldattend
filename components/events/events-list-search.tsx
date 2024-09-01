import React from "react";
import { getEventsYearsAndMonths } from "@/lib/dummy.data";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	Controller,
} from "react-hook-form";
import SearchSelect from "./events-list-search-select";
import { useRouter } from "next/router";
import SearchErrorUI from "./events-list-search-error-ui";
import SearchActions from "./events-list-search-actions";

export default function EventsListSearch() {
	const { years, months } = getEventsYearsAndMonths();
	type FormType = { year: string; month: string };
	const methods = useForm<FormType>({
		defaultValues: {
			year: "",
			month: "",
		},
		mode: "onSubmit",
	});
	const { errors } = methods.formState;
	const router = useRouter();
	const onValid: SubmitHandler<FormType> = (data) => {
		router.push(`/events/${data.year}/${data.month}`);
	};
	const onClear = () => {
		methods.resetField("year", { defaultValue: "" });
		methods.resetField("month", { defaultValue: "" });
		router.push("/events");
	};
	return (
		<FormProvider {...methods}>
			<form
				aria-label="events-search"
				className="px-8 lg:px-16 flex flex-col gap-5 lg:flex-row lg:items-center"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<div
					aria-label="form-fields"
					className="w-full flex flex-col gap-2 md:flex-row"
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
				</div>
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
