<script lang="ts">
	export let skillCategories = [
		{
			title: "Programming Languages",
			skills: [
				"JavaScript (ES6+)",
				"TypeScript",
				"Bash"
			]
		},
		{
			title: "Frameworks & Runtimes",
			skills: [
				"Node.js",
				"React.js",
				"NestJS",
				"Next.js"
			]
		},
		{
			title: "Databases",
			skills: [
				"MySQL",
				"PostgreSQL",
				"MongoDB",
				"DynamoDB"
			]
		},
		{
			title: "Cloud & DevOps",
			skills: [
				"AWS",
				"Terraform",
				"Docker",
				"Kubernetes",
				"GitLab CI/CD"
			]
		},
		{
			title: "Architecture & Design",
			skills: [
				"Microservices",
				"Domain-Driven Design",
				"Event-Driven Design",
				"Serverless Architecture",
				"RESTful APIs",
				"GraphQL"
			]
		},
		{
			title: "Project Management",
			skills: [
				"JIRA",
				"YouTrack",
				"ClickUp",
				"Agile (Scrum/Kanban)"
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

<section id="skills" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
				My Skills
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				A comprehensive overview of the technologies and tools I use to bring ideas to life.
			</p>
			<div class="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
		</div>

		<!-- Skills Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
			{#each skillCategories as category, categoryIndex}
				<div 
					class="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {categoryIndex * 150}ms"
				>
					<!-- Category Title -->
					<div class="flex items-center mb-6">
						<div class="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
						<h3 class="text-xl lg:text-2xl font-bold text-gray-900">
							{category.title}
						</h3>
					</div>

					<!-- Skills List -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{#each category.skills as skill, skillIndex}
							<div 
								class="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group {isVisible ? 'animate-fade-in-right' : 'opacity-0'}"
								style="animation-delay: {(categoryIndex * 150) + (skillIndex * 50)}ms"
							>
								<!-- Skill Icon/Indicator -->
								<div class="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
								
								<!-- Skill Name -->
								<span class="text-gray-700 font-medium text-sm lg:text-base group-hover:text-blue-600 transition-colors duration-200">
									{skill}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Info Section -->
		<div class="mt-16 text-center">
			<div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
				<h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
					Always Learning
				</h3>
				<p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
					Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
					I regularly explore new frameworks, attend conferences, and contribute to open-source projects.
				</p>
				
				<!-- Learning Stats -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div class="text-center">
						<div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">4+</div>
						<div class="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
					</div>
					<div class="text-center">
						<div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">100K+</div>
						<div class="text-sm text-gray-600 uppercase tracking-wide">Daily Transactions</div>
					</div>
					<div class="text-center">
						<div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">20+</div>
						<div class="text-sm text-gray-600 uppercase tracking-wide">Technologies Used</div>
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
