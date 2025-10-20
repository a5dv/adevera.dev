<script lang="ts">
	export let name = "Your Name";
	export let bio = {
		paragraph1: "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey began with a curiosity about how things work, which led me to discover the perfect blend of creativity and logic in software development.",
		paragraph2: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional."
	};
	export let imageUrl = "https://res.cloudinary.com/dpdvljzo2/image/upload/f_auto,q_auto/v1760965693/IMG_2602_ymsoaz.heic"; // Professional headshot with auto format conversion
	export let imageAlt = "Adrian Carlos A. de Vera - Professional headshot";
</script>

<section id="about" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Left Column - Image -->
			<div class="order-2 lg:order-1">
				<div class="relative">
					<!-- Main Image Container -->
					<div class="relative overflow-hidden rounded-2xl shadow-2xl">
						<img
							src={imageUrl}
							alt={imageAlt}
							class="w-full h-96 lg:h-[500px] object-cover"
							loading="lazy"
						/>
						<!-- Overlay for better text contrast if needed -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
					</div>
					
					<!-- Decorative Elements -->
					<div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
					<div class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
				</div>
			</div>

			<!-- Right Column - Content -->
			<div class="order-1 lg:order-2">
				<div class="space-y-8">
					<!-- Section Header -->
					<div>
						<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							About Me
						</h2>
						<div class="w-20 h-1 bg-blue-600 rounded-full"></div>
					</div>

					<!-- Bio Content -->
					<div class="space-y-6">
						<p class="text-lg text-gray-600 leading-relaxed">
							{bio.paragraph1}
						</p>
						<p class="text-lg text-gray-600 leading-relaxed">
							{bio.paragraph2}
						</p>
					</div>

					<!-- Stats or Highlights -->
					<div class="grid grid-cols-2 gap-8 pt-8">
						<div class="text-center lg:text-left">
							<div class="text-3xl font-bold text-blue-600 mb-2">4+</div>
							<div class="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
						</div>
						<!-- <div class="text-center lg:text-left">
							<div class="text-3xl font-bold text-blue-600 mb-2">100K+</div>
							<div class="text-sm text-gray-600 uppercase tracking-wide">Daily Transactions</div>
						</div> -->
					</div>

					<!-- Call to Action -->
					<div class="pt-8">
						<a
							href="#contact"
							class="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
							on:click={(e) => {
								e.preventDefault();
								const target = document.querySelector('#contact');
								if (target) {
									target.scrollIntoView({
										behavior: 'smooth',
										block: 'start'
									});
								}
							}}
						>
							Let's Connect
							<svg
								class="ml-2 w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
