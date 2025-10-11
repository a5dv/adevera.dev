<script lang="ts">
	export let name = "Your Name";
	export let valueProposition = "Full-Stack Developer & UI/UX Designer";
	export let subHeadline = "I create beautiful, functional digital experiences that solve real problems and delight users.";
	
	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/a5dv/',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/a5dv',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'Email',
			url: 'mailto:adr.cadv@gmail.com',
			icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z'
		}
	];

	function scrollToWork() {
		const workSection = document.querySelector('#work');
		if (workSection) {
			workSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}

	function scrollToAbout() {
		const aboutSection = document.querySelector('#about');
		if (aboutSection) {
			aboutSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="text-center">
			<!-- Main Headline -->
			<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
				Hi, I'm <span class="text-blue-600">{name}</span>.
				<br />
				<span class="text-gray-700">{valueProposition}</span>
			</h1>

			<!-- Sub-headline -->
			<p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
				{subHeadline}
			</p>

			<!-- CTA Button -->
			<div class="mb-16">
				<button
					on:click={scrollToWork}
					class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
				>
					View My Work
					<svg
						class="ml-2 w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				</button>
			</div>

			<!-- Social Links -->
			<div class="flex justify-center space-x-6">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
						aria-label={social.name}
					>
						<svg
							class="w-6 h-6 text-gray-600 group-hover:text-white transition-colors"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d={social.icon} />
						</svg>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Scroll Indicator - Now positioned relative to the section, not the inner div -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
		<button
			on:click={scrollToAbout}
			class="flex flex-col items-center space-y-2 group cursor-pointer focus:outline-none"
			aria-label="Scroll to next section"
		>
			<div class="w-6 h-10 border-2 border-gray-400 group-hover:border-blue-600 rounded-full flex justify-center transition-colors duration-300">
				<div class="w-1 h-3 bg-gray-400 group-hover:bg-blue-600 rounded-full mt-2 animate-pulse transition-colors duration-300"></div>
			</div>
			<!-- Text hint - visible on larger screens -->
			<p class="text-xs text-gray-500 group-hover:text-blue-600 text-center hidden sm:block transition-colors duration-300">
				Scroll down
			</p>
		</button>
	</div>
</section>
