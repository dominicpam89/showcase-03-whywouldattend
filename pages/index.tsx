import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import HomeLayout from "@/components/HomeLayout";

const Page: NextPageWithLayout = () => {
	return (
		<section id="home">
			<h1>Home</h1>
		</section>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <HomeLayout>{page}</HomeLayout>;
};

export default Page;
