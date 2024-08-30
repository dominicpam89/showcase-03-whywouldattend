import { motion } from "framer-motion";

interface Props {
	message: string;
}
export default function SearchErrorUI({ message }: Props) {
	return (
		<motion.p
			initial={{ x: -15, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			className="text-destructive"
		>
			{message}
		</motion.p>
	);
}
