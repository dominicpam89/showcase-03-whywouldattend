import React from "react";
import { getEventsYearsAndMonths } from "@/lib/dummy.data";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	Controller,
} from "react-hook-form";

export default function EventsListSearch() {
	const { years, months } = getEventsYearsAndMonths();
	type FormType = { year: string; month: string };
	const methods = useForm<FormType>({
		defaultValues: {
			year: "",
			month: "",
		},
	});
	const onValid: SubmitHandler<FormType> = (data) => {
		console.log(data);
	};
	return (
		<FormProvider {...methods}>
			<form
				aria-label="events-search"
				className="px-8 lg:px-16 flex gap-2"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<Controller
					control={methods.control}
					name="year"
					render={({ field }) => (
						<Select
							key="years"
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select Year" />
							</SelectTrigger>
							<SelectContent>
								{years.map((year) => (
									<SelectItem key={year} value={year.toString()}>
										{year}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				<Controller
					control={methods.control}
					name="month"
					render={({ field }) => (
						<Select
							key="months"
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select Month" />
							</SelectTrigger>
							<SelectContent>
								{months.map((month) => (
									<SelectItem key={month} value={month}>
										{month}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				<Button>
					<Search className="mr-2 h-4 w-4" /> Search
				</Button>
			</form>
		</FormProvider>
	);
}
