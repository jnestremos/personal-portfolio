import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const About = () => {
	const skills = [
		"React.js",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
		"Material UI",
		"Chakra UI",
		"ShadCN",
		"Redux Toolkit",
		"Zustand",
		"React Query",
		"Node.js",
		"Express.js",
		"Supabase",
		"Firebase",
		"GraphQL",
		"Apollo",
		"PostgreSQL",
		"MongoDB",
		"MySQL",
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="about" className="py-20 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
				>
					{/* Profile Image */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center lg:justify-start"
					>
						<div className="relative">
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								className="relative z-10"
							>
								<ImageWithFallback
									src="/profile-picture.jpg"
									alt="Joshua Estremos - Front-End Engineer"
									className="w-80 h-80 object-cover object-[center_20%] rounded-2xl shadow-2xl"
								/>
							</motion.div>

							{/* Gradient ring */}
							<div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 rounded-2xl blur-lg opacity-20 -z-10 scale-110" />
						</div>
					</motion.div>

					{/* Content */}
					<motion.div variants={itemVariants} className="space-y-6">
						<div>
							<motion.h2
								variants={itemVariants}
								className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
							>
								About Me
							</motion.h2>

							<motion.div
								variants={itemVariants}
								className="space-y-4 text-lg text-muted-foreground"
							>
								<p>
									I am a Front-End Engineer with 3+ years of experience building
									scalable SaaS, e-commerce, and enterprise web applications for
									international clients.
								</p>

								<p>
									I specialize in React, Next.js, and TypeScript with a strong
									focus on reusable design systems, component-driven
									development, and polished UI/UX implementation.
								</p>

								<p>
									I enjoy owning front-end features end-to-end, collaborating
									cross-functionally, and mentoring developers to deliver
									high-quality, production-ready user experiences aligned with
									business goals.
								</p>
							</motion.div>
						</div>

						{/* Skills */}
						<motion.div variants={itemVariants}>
							<h3 className="text-xl font-semibold mb-4">
								Technologies & Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										whileHover={{ scale: 1.05 }}
									>
										<Badge
											variant="secondary"
											className="bg-teal-500/10 text-teal-400 border-teal-500/20 hover:bg-teal-500/20 transition-colors px-3 py-1"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Download Resume Button */}
						<motion.div variants={itemVariants}>
							<a href="/resume.pdf" download="Joshua-Estremos-Resume.pdf">
								<Button
									size="lg"
									className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
								>
									<svg
										className="w-5 h-5 mr-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									Download Resume
								</Button>
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
