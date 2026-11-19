import { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	gallery: string[];
	technologies: string[];
	liveUrl?: string;
	featured: boolean;
};

const encodeAsset = (path: string) =>
	path
		.split("/")
		.map((segment) => encodeURIComponent(segment))
		.join("/")
		.replace(/^%2F/, "/");

const projects: Project[] = [
	{
		id: 1,
		title: "Project Blueprint",
		description:
			"Reusable Next.js starter covering onboarding, authenticated flows, and a CLI-installable chat plugin used as a base for upcoming projects.",
		image: "/projects/blueprint/Home - Existing User.png",
		gallery: [
			"/projects/blueprint/Home - Existing User.png",
			"/projects/blueprint/About Us.png",
			"/projects/blueprint/Contact Us - Empty.png",
		],
		technologies: ["Next.js", "Zustand", "ShadCN", "Node CLI"],
		featured: true,
	},
	{
		id: 2,
		title: "Hardware E-Commerce System",
		description:
			"Saleor-powered storefront for a nationwide hardware retailer supporting 100+ branches, with GraphQL catalog, CMS pages, and a Leaflet branch locator.",
		image: "/projects/hardware/hardware.png",
		gallery: [
			"/projects/hardware/hardware.png",
			"/projects/hardware/hardware orders.png",
			"/projects/hardware/hardware login.png",
		],
		technologies: ["React.js", "TypeScript", "Next.js", "REST APIs"],
		featured: true,
	},
	{
		id: 3,
		title: "Financeable",
		description:
			"Shipped 2 production surfaces for Australian brokers: a React + Redux Toolkit lender workflow app and a Next.js marketing site, plus Express data-migration endpoints.",
		image: "/projects/financeable/main.png",
		gallery: [
			"/projects/financeable/main.png",
			"/projects/financeable/About Us.png",
			"/projects/financeable/contact us.png",
		],
		technologies: [
			"React.js",
			"React RTK",
			"Express.js",
			"Mongoose",
			"Next.js",
			"Material UI",
		],
		liveUrl: "https://financeable.com.au",
		featured: true,
	},
	{
		id: 4,
		title: "Mugna Website V2",
		description:
			"Rebuilt the company site in Next.js with Contentful CMS so marketing can update services and products without engineering, plus scroll-triggered animations.",
		image: "/projects/mugna/Home Page (list view).png",
		gallery: [
			"/projects/mugna/Home Page (list view).png",
			"/projects/mugna/About Us.png",
			"/projects/mugna/Blog Featured.png",
		],
		technologies: ["Next.js", "Contentful", "Intersection Observer"],
		liveUrl: "https://mugna.tech",
		featured: false,
	},
	{
		id: 5,
		title: "School Accounting System",
		description:
			"Multi-branch accounting platform covering 3+ modules (Chart of Accounts, Fee Codes, AP/AR), with TanStack Query, Chart.js reporting, and intern supervision.",
		image: "/projects/school-accounting/Manager Dashboard.jpg",
		gallery: [
			"/projects/school-accounting/Manager Dashboard.jpg",
			"/projects/school-accounting/Chart of Accounts.png",
			"/projects/school-accounting/Receivables Overview.jpg",
			"/projects/school-accounting/New User - Login.png",
		],
		technologies: ["Next.js", "TypeScript", "TanStack Query", "REST APIs"],
		featured: false,
	},
	{
		id: 6,
		title: "Specialty Coffee Depot",
		description:
			"Led front-end delivery of a specialty coffee storefront covering 3 core flows (checkout, authentication, purchase) on Next.js, Saleor, and Chakra UI.",
		image: "/projects/specialty/Image 1.png",
		gallery: [
			"/projects/specialty/Image 1.png",
			"/projects/specialty/Image 2.png",
			"/projects/specialty/image.png",
		],
		technologies: ["Next.js", "Saleor", "Chakra UI", "TypeScript"],
		featured: false,
	},
];

const ProjectActions = ({ project }: { project: Project }) => {
	const [galleryOpen, setGalleryOpen] = useState(false);

	return (
		<div className="flex flex-wrap gap-2 mt-5">
			<Button
				size="sm"
				variant="outline"
				className="border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300"
				onClick={() => setGalleryOpen(true)}
			>
				<Images className="w-4 h-4" />
				Gallery
			</Button>
			<Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
				<DialogContent className="sm:max-w-4xl p-4 sm:p-6">
					<DialogHeader>
						<DialogTitle>{project.title}</DialogTitle>
						<DialogDescription>
							{`${project.gallery.length} project screenshot${
								project.gallery.length === 1 ? "" : "s"
							}`}
						</DialogDescription>
					</DialogHeader>
					<Carousel className="w-full">
						<CarouselContent>
							{project.gallery.map((src) => (
								<CarouselItem key={src}>
									<div className="overflow-hidden rounded-lg border border-border/50 bg-muted/30">
										<ImageWithFallback
											src={encodeAsset(src)}
											alt={`${project.title} screenshot`}
											className="w-full h-[50vh] sm:h-[60vh] object-contain bg-black/40"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						{project.gallery.length > 1 && (
							<>
								<CarouselPrevious className="left-2 border-white/30 bg-black/50 text-white hover:bg-black/70 hover:text-white" />
								<CarouselNext className="right-2 border-white/30 bg-black/50 text-white hover:bg-black/70 hover:text-white" />
							</>
						)}
					</Carousel>
				</DialogContent>
			</Dialog>

			{project.liveUrl && (
				<a href={project.liveUrl} target="_blank" rel="noreferrer">
					<Button
						size="sm"
						className="bg-teal-500 hover:bg-teal-600 text-white"
					>
						<ExternalLink className="w-4 h-4" />
						Live Demo
					</Button>
				</a>
			)}
		</div>
	);
};

const Portfolio = () => {
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
							<Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 h-full flex flex-col">
								<div className="relative overflow-hidden">
									<ImageWithFallback
										src={encodeAsset(project.image)}
										alt={project.title}
										className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
									/>

									{project.featured && (
										<div className="absolute top-4 left-4">
											<Badge className="bg-teal-500 text-white">Featured</Badge>
										</div>
									)}
								</div>

								<CardContent className="p-6 flex flex-col flex-1">
									<h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground mb-4 text-sm">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mt-auto">
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
									<ProjectActions project={project} />
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
