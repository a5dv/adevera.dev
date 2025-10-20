<script lang="ts">
	let selectedProject: any = null;
	let showModal = false;

	export let projects = [
		{
			id: 1,
			title: "Togeda.ai",
			description: "AI-powered collaboration platform built with modern web technologies",
			image: "https://res.cloudinary.com/dpdvljzo2/image/upload/f_auto,q_auto/v1760967202/togedaai_sg2zku.jpg",
			tags: ["TypeScript", "Next.js", "Firebase", "Vercel"],
			liveUrl: "https://togeda.ai",
			githubUrl: null, // Private repository
			caseStudy: {
				overview: "Togeda.ai is a modern AI-powered collaboration platform built with cutting-edge web technologies, focusing on seamless user experience and real-time functionality.",
				challenge: "Building a scalable, real-time collaboration platform that leverages AI capabilities while maintaining fast performance and excellent user experience across devices.",
				solution: "Architected using TypeScript and Next.js for type-safe, server-side rendered frontend, Firebase for real-time database and authentication, and deployed on Vercel for optimal performance and global CDN distribution.",
				results: "Successfully launched production platform with real-time collaboration features, AI integration, and seamless user experience. Deployed on Vercel with automatic scaling and global edge network."
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

<section id="work" class="py-20 bg-gray-50 dark:bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
				My Work
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
			</p>
			<div class="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-6"></div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
					<!-- Project Image -->
					<div class="relative overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
							loading="lazy"
						/>
						<!-- <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
							<button
								on:click={() => openModal(project)}
								class="opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
							>
								View Case Study
							</button>
						</div> -->
					</div>

					<!-- Project Content -->
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
						<p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
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
								class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
							>
								Live Demo →
							</a>
							{#if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm font-medium transition-colors"
								>
									GitHub →
								</a>
							{/if}
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
				class="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-80 transition-opacity"
				aria-hidden="true"
				on:click={closeModal}
			></div>

			<!-- Modal panel -->
			<div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
				<div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<!-- Modal Header -->
					<div class="flex justify-between items-center mb-6">
						<h3 class="text-2xl font-bold text-gray-900 dark:text-white" id="modal-title">
							{selectedProject.title}
						</h3>
						<button
							on:click={closeModal}
							class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
							aria-label="Close modal"
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
								<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Overview</h4>
								<p class="text-gray-600 dark:text-gray-300 text-sm">{selectedProject.caseStudy.overview}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
								<p class="text-gray-600 dark:text-gray-300 text-sm">{selectedProject.caseStudy.challenge}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
								<p class="text-gray-600 dark:text-gray-300 text-sm">{selectedProject.caseStudy.solution}</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
								<p class="text-gray-600 dark:text-gray-300 text-sm">{selectedProject.caseStudy.results}</p>
							</div>
						</div>

						<!-- Tags -->
						<div>
							<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
							<div class="flex flex-wrap gap-2">
								{#each selectedProject.tags as tag}
									<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Modal Footer -->
				<div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<a
						href={selectedProject.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-blue-500 text-base font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-800 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
					>
						View Live Demo
					</a>
					{#if selectedProject.githubUrl}
						<a
							href={selectedProject.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-800 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
						>
							View Code
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
