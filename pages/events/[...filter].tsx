import EventsListFiltered from "@/components/events-w-filter/events-list-filtered";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import NotFoundUI from "@/components/ui-awesome/not-found";

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { filter } = router.query;
	const yearQuery = filter?.at(0);
	const monthQuery = filter?.at(1);
	if (!yearQuery || !monthQuery)
		return (
			<NotFoundUI
				title="Error filter"
				subtitle="Filter is not defined"
				message="Maybe you should not change behavior of this app directly in the url"
			/>
		);
	return (
		<section id="events-with-filter">
			<EventsListFiltered year={yearQuery} month={monthQuery} />
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Page;
