import { motion } from "framer-motion";
import Image from "next/image";

type FeatureContentProps = {
	image: string;
	title: string;
};

export default function FeatureContent({ image, title }: FeatureContentProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="h-full flex items-center justify-center"
		>
			<div className="glass rounded-xl overflow-hidden w-full relative">
				<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
				<Image
					alt={title}
					className="size-full object-cover relative z-10"
					height={500}
					src={image}
					width={500}
				/>
			</div>
		</motion.div>
	);
}
