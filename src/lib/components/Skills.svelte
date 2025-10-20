<script lang="ts">
	interface Skill {
		name: string;
		icon?: string; // URL to icon or SVG path
		color?: string; // Brand color for the icon
	}

	interface SkillCategory {
		title: string;
		skills: Skill[];
	}

	export let skillCategories: SkillCategory[] = [
		{
			title: "Programming Languages",
			skills: [
				{
					name: "JavaScript (ES6+)",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
					color: "#F7DF1E"
				},
				{
					name: "TypeScript",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
					color: "#3178C6"
				},
				{
					name: "Bash",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
					color: "#4EAA25"
				}
			]
		},
		{
			title: "Frameworks & Runtimes",
			skills: [
				{
					name: "Node.js",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
					color: "#339933"
				},
				{
					name: "React.js",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
					color: "#61DAFB"
				},
				{
					name: "NestJS",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
					color: "#E0234E"
				},
				{
					name: "Next.js",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
					color: "#000000"
				}
			]
		},
		{
			title: "Databases",
			skills: [
				{
					name: "MySQL",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
					color: "#4479A1"
				},
				{
					name: "PostgreSQL",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
					color: "#4169E1"
				},
				{
					name: "MongoDB",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
					color: "#47A248"
				},
				{
					name: "DynamoDB",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
					color: "#FF9900"
				}
			]
		},
		{
			title: "Cloud & DevOps",
			skills: [
				{
					name: "AWS",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
					color: "#FF9900"
				},
				{
					name: "Terraform",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
					color: "#7B42BC"
				},
				{
					name: "Docker",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
					color: "#2496ED"
				},
				{
					name: "Kubernetes",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
					color: "#326CE5"
				},
				{
					name: "GitLab CI/CD",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
					color: "#FC6D26"
				}
			]
		},
		{
			title: "Architecture & Design",
			skills: [
				{ name: "Microservices" },
				{ name: "Domain-Driven Design" },
				{ name: "Event-Driven Design" },
				{ name: "Serverless Architecture" },
				{ name: "RESTful APIs" },
				{
					name: "GraphQL",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
					color: "#E10098"
				}
			]
		},
		{
			title: "Project Management",
			skills: [
				{
					name: "JIRA",
					icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
					color: "#0052CC"
				},
				{ name: "YouTrack" },
				{ name: "ClickUp" },
				{ name: "Agile (Scrum/Kanban)" }
			]
		}
	];

	// Animation delay for staggered appearance
	let isVisible = false;
	
	import { onMount } from 'svelte';
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.1 }
		);
		
		const skillsSection = document.querySelector('#skills');
		if (skillsSection) {
			observer.observe(skillsSection);
		}
		
		return () => observer.disconnect();
	});
</script>

<section id="skills" class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
				My Skills
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				A comprehensive overview of the technologies and tools I use to bring ideas to life.
			</p>
			<div class="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-6"></div>
		</div>

		<!-- Skills Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
			{#each skillCategories as category, categoryIndex}
				<div
					class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {categoryIndex * 150}ms"
				>
					<!-- Category Title -->
					<div class="flex items-center mb-6">
						<div class="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
						<h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
							{category.title}
						</h3>
					</div>

					<!-- Skills List -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{#each category.skills as skill, skillIndex}
							<div
								class="flex items-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md dark:shadow-blue-900/10 dark:hover:shadow-blue-900/30 transition-all duration-200 group {isVisible ? 'animate-fade-in-right' : 'opacity-0'}"
								style="animation-delay: {(categoryIndex * 150) + (skillIndex * 50)}ms"
							>
								<!-- Skill Icon/Indicator -->
								{#if skill.icon}
									<div class="w-6 h-6 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
										<img
											src={skill.icon}
											alt={skill.name}
											class="w-full h-full object-contain"
											loading="lazy"
										/>
									</div>
								{:else}
									<div class="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
								{/if}

								<!-- Skill Name -->
								<span class="text-gray-700 dark:text-gray-300 font-medium text-sm lg:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
									{skill.name}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Info Section -->
		<div class="mt-16 text-center">
			<div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12">
				<h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
					Always Learning
				</h3>
				<p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
					Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.
					I regularly explore new frameworks, attend conferences, and contribute to open-source projects.
				</p>

				<!-- Learning Stats -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div class="text-center">
						<div class="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
					</div>
					<div class="text-center">
						<div class="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Technologies Used</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in-right {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.6s ease-out forwards;
	}

	.animate-fade-in-right {
		animation: fade-in-right 0.4s ease-out forwards;
	}
</style>
