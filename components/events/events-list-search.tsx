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
		router.push(`/events?year=${data.year}&month=${data.month}`);
	};
	return (
		<FormProvider {...methods}>
			<form
				aria-label="events-search"
				className="px-8 lg:px-16 flex gap-2 items-center"
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
				<Button>
					<Search className="mr-2 h-4 w-4" /> Search
				</Button>
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
