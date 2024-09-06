import { motion } from "framer-motion";
import { LoaderPinwheelIcon } from "lucide-react";

export default function LoadingUI() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			id="loading-page"
			className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 dark:bg-gray-100"
		>
			<motion.div
				aria-label="motion-wrapper"
				animate={{
					rotateZ: [0, 360],
					opacity: [0.5, 1, 0.5],
					transition: {
						repeat: Infinity,
						duration: 0.9,
						bounce: 0.2,
					},
				}}
				exit={{ opacity: 0 }}
			>
				<LoaderPinwheelIcon className="w-[120px] h-[120px] text-primary-foreground dark:text-primary" />
			</motion.div>
		</motion.section>
	);
}
