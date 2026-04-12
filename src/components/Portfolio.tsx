import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: "Project Blueprint",
			description:
				"A reusable project template used as a base for upcoming projects, including authenticated flows and a pluggable chat module.",
			image: "/projects/blueprint/Home%20-%20Existing%20User.png",
			technologies: ["Next.js", "Zustand", "ShadCN", "Node CLI"],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
		},
		{
			id: 2,
			title: "Hardware E-Commerce System",
			description:
				"Enterprise front-end work focused on scalable architecture, reusable UI patterns, and secure data-driven workflows.",
			image: "/projects/hardware/hardware.png",
			technologies: ["React.js", "TypeScript", "Next.js", "REST APIs"],
			liveUrl: "#",
			githubUrl: "#",
			featured: true,
		},
		{
			id: 3,
			title: "Financeable",
			description:
				"Loan brokerage system used by brokers in Australia with lender workflows, data migration endpoints, and a Next.js showcase site.",
			image: "/projects/financeable/main.png",
			technologies: [
				"React.js",
				"React RTK",
				"Express.js",
				"Mongoose",
				"Next.js",
				"Material UI",
			],
			liveUrl: "https://financeable.com.au",
			githubUrl: "#",
			featured: true,
		},
		{
			id: 4,
			title: "Mugna Website V2",
			description:
				"Company website revamp showcasing services and products with CMS integration and animated user-facing pages.",
			image: "/projects/mugna/Home%20Page%20(list%20view).png",
			technologies: ["Next.js", "Contentful", "Intersection Observer"],
			liveUrl: "https://mugna.tech",
			githubUrl: "#",
			featured: false,
		},
		{
			id: 5,
			title: "School Accounting System",
			description:
				"Multi-branch accounting platform designed for adaptable financial workflows, scalable reporting, and configurable access controls to support school needs.",
			image: "/projects/school-accounting/Manager%20Dashboard.jpg",
			technologies: ["Next.js", "TypeScript", "TanStack Query", "REST APIs"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
		{
			id: 6,
			title: "Specialty Coffee Depot",
			description:
				"Led front-end development for a specialty coffee e-commerce storefront with checkout, authentication, and API flows.",
			image: "/projects/specialty/Image%201.png",
			technologies: ["Next.js", "Saleor", "Chakra UI", "TypeScript"],
			liveUrl: "#",
			githubUrl: "#",
			featured: false,
		},
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
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
						Project Experience
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Selected projects: Blueprint, Hardware E-commmerce System,
						Financeable, Mugna, School Accounting System, and Specialty Coffee
						Depot.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							whileHover={{ y: -10 }}
							className="group"
						>
							<Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
								<div className="relative overflow-hidden">
									<ImageWithFallback
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									{project.featured && (
										<div className="absolute top-4 left-4">
											<Badge className="bg-teal-500 text-white">Featured</Badge>
										</div>
									)}

									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="flex gap-3">
											{project.liveUrl !== "#" && (
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noreferrer"
												>
													<Button
														size="sm"
														variant="secondary"
														className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
													>
														<svg
															className="w-4 h-4 mr-2"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
															/>
														</svg>
														Live Demo
													</Button>
												</a>
											)}
										</div>
									</div>
								</div>

								<CardContent className="p-6">
									<h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground mb-4 text-sm">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="text-xs border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
											>
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
