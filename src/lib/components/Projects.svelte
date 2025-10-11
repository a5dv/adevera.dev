<script lang="ts">
	let selectedProject: any = null;
	let showModal = false;

	export let projects = [
		{
			id: 1,
			title: "Payment Orchestrator Modernization",
			description: "Cloud-native microservice architecture migration for high-volume payment processing",
			image: "/api/placeholder/600/400",
			tags: ["Node.js", "Kafka", "DynamoDB", "AWS", "Kubernetes", "Terraform"],
			liveUrl: "#",
			githubUrl: "#",
			caseStudy: {
				overview: "Engineered the migration of a high-volume Payment Orchestrator to a cloud-native microservice architecture on AWS, significantly enhancing system resilience and scalability.",
				challenge: "Migrating a legacy payment system processing 100,000+ daily transactions without downtime while improving performance and scalability.",
				solution: "Implemented high-performance, event-driven backend services using NodeJS, Kafka, and DynamoDB. Automated deployment through GitOps workflow with Kubernetes, Terraform, and ArgoCD.",
				results: "Successfully processes over 100,000 payments daily in real-time with enhanced system resilience and zero-downtime deployments."
			}
		},
		{
			id: 2,
			title: "Serverless Payment Orchestrator",
			description: "End-to-end serverless payment processing system with real-time transaction management",
			image: "/api/placeholder/600/400",
			tags: ["AWS Lambda", "DynamoDB Streams", "React", "GraphQL", "GitLab CI"],
			liveUrl: "#",
			githubUrl: "#",
			caseStudy: {
				overview: "Led an Agile team of 3 engineers in developing a serverless Payment Orchestrator from the ground up, handling massive transaction volumes with real-time processing capabilities.",
				challenge: "Building a scalable, serverless architecture that could handle 100,000+ daily transactions while maintaining real-time processing and management capabilities.",
				solution: "Architected a full-stack solution with NodeJS backend on AWS Lambda, event-driven lifecycle using DynamoDB Streams, and ReactJS/GraphQL interface. Established automated CI/CD pipelines with Docker containerization.",
				results: "Successfully processes over 100,000 transactions per day with improved deployment reliability and application stability through automated pipelines."
			}
		},
		{
			id: 3,
			title: "Pivot Plan It Platform",
			description: "Full-stack MVP connecting service providers and consumers with integrated booking and payments",
			image: "/api/placeholder/600/400",
			tags: ["TypeScript", "Next.js", "PostgreSQL", "Edge Functions"],
			liveUrl: "#",
			githubUrl: "#",
			caseStudy: {
				overview: "Partnered with founder as Technical Consultant to translate business concept into technical roadmap, leading end-to-end development of a scalable marketplace platform.",
				challenge: "Developing a cost-effective, scalable platform within startup budget constraints while ensuring secure authentication, intuitive workflows, and payment integration.",
				solution: "Architected using NodeJS TypeScript Edge functions, NextJS, and PostgreSQL. Implemented strategic solutions including secure user authentication, booking workflows, and integrated payments.",
				results: "Successfully launched MVP with lean, rapid deployment strategy, enabling affordable market entry while maintaining scalability for future growth."
			}
		}
	];

	function openModal(project: any) {
		selectedProject = project;
		showModal = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		showModal = false;
		selectedProject = null;
		document.body.style.overflow = 'auto';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="work" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
				My Work
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
			</p>
			<div class="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
					<!-- Project Image -->
					<div class="relative overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
							<button
								on:click={() => openModal(project)}
								class="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
							>
								View Case Study
							</button>
						</div>
					</div>

					<!-- Project Content -->
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
						<p class="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
						
						<!-- Tags -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
									{tag}
								</span>
							{/each}
						</div>

						<!-- Project Links -->
						<div class="flex space-x-4">
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
							>
								Live Demo →
							</a>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
							>
								GitHub →
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Modal -->
{#if showModal && selectedProject}
	<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<!-- Background overlay -->
			<div 
				class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
				aria-hidden="true"
				on:click={closeModal}
			></div>

			<!-- Modal panel -->
			<div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<!-- Modal Header -->
					<div class="flex justify-between items-center mb-6">
						<h3 class="text-2xl font-bold text-gray-900" id="modal-title">
							{selectedProject.title}
						</h3>
						<button
							on:click={closeModal}
							class="text-gray-400 hover:text-gray-600 transition-colors"
						>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>

					<!-- Modal Content -->
					<div class="space-y-6">
						<img
							src={selectedProject.image}
							alt={selectedProject.title}
							class="w-full h-64 object-cover rounded-lg"
						/>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 class="font-semibold text-gray-900 mb-2">Overview</h4>
								<p class="text-gray-600 text-sm">{selectedProject.caseStudy.overview}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 mb-2">Challenge</h4>
								<p class="text-gray-600 text-sm">{selectedProject.caseStudy.challenge}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 mb-2">Solution</h4>
								<p class="text-gray-600 text-sm">{selectedProject.caseStudy.solution}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 mb-2">Results</h4>
								<p class="text-gray-600 text-sm">{selectedProject.caseStudy.results}</p>
							</div>
						</div>

						<!-- Tags -->
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used</h4>
							<div class="flex flex-wrap gap-2">
								{#each selectedProject.tags as tag}
									<span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Modal Footer -->
				<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<a
						href={selectedProject.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
					>
						View Live Demo
					</a>
					<a
						href={selectedProject.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
