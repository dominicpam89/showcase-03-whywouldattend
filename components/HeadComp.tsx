import Head from "next/head";

interface Props {
	title: string;
	keywords?: string;
	author?: string;
	description?: string;
}
export default function HeadComp({
	title,
	keywords = "nextjs, react, frontend, fullstack, showcase",
	author = "DominicPam",
	description = "Another showcase of DominicPam which to show list of events",
}: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="keywords" content={keywords} />
			<meta name="author" content={author} />
			<meta name="description" content={description} />
		</Head>
	);
}
