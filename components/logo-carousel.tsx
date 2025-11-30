import { motion } from "framer-motion";

export default function LogoCarousel() {
	const logos = [
		"/images/picture-6.png",
		"/images/picture-10.png",
		"/images/picture-2.png",
		"/images/picture-11.png",
		"/images/picture-3.png",
	];

	const extendedLogos = [...logos, ...logos, ...logos];

	return (
		<div className="w-full overflow-hidden bg-primary/50 backdrop-blur-sm py-12 mt-20">
			<motion.div
				className="flex space-x-16"
				initial={{ opacity: 0, x: "0%" }}
				animate={{
					opacity: 1,
					x: "-50%",
				}}
				transition={{
					opacity: { duration: 0.8 },
					x: {
						duration: 15, // Reduced from 25 to 15 seconds
						repeat: Infinity,
						ease: "linear",
						delay: 0.5,
					},
				}}
				style={{
					width: "fit-content",
					display: "flex",
					gap: "4rem",
				}}
			>
				{extendedLogos.map((logo, index) => (
					<motion.img
						alt={`Partner logo ${index + 1}`}
						key={`logo-${index}`}
						src={logo}
						className="h-8 object-contain"
						initial={{ opacity: 0.5 }}
						whileHover={{
							opacity: 1,
							scale: 1.05,
							transition: { duration: 0.2 },
						}}
					/>
				))}
			</motion.div>
		</div>
	);
}
