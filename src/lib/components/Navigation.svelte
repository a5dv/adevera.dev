<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isScrolled = false;

	const navItems = [
		{ label: 'HOME', href: '#home' },
		{ label: 'ABOUT', href: '#about' },
		{ label: 'WORK', href: '#work' },
		{ label: 'SKILLS', href: '#skills' },
		{ label: 'CONTACT', href: '#contact' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleScroll() {
		isScrolled = window.scrollY > 50;
	}

	function smoothScroll(event: Event, href: string) {
		event.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
		closeMenu();
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white/95 backdrop-blur-sm shadow-sm'
		: 'bg-transparent'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo/Name -->
			<div class="flex-shrink-0">
				<a
					href="#home"
					class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
					on:click={(e) => smoothScroll(e, '#home')}
				>
					Portfolio
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
							on:click={(e) => smoothScroll(e, item.href)}
						>
							{item.label}
							<span
								class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
							></span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Theme Toggle (placeholder circle) -->
			<div class="hidden md:block">
				<button
					class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
					aria-label="Theme toggle"
				>
					<div class="w-3 h-3 rounded-full bg-gray-600"></div>
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!-- Hamburger icon -->
					<svg
						class="block h-6 w-6 {isMenuOpen ? 'hidden' : 'block'}"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!-- Close icon -->
					<svg
						class="block h-6 w-6 {isMenuOpen ? 'block' : 'hidden'}"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	<div class="md:hidden {isMenuOpen ? 'block' : 'hidden'}">
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
					on:click={(e) => smoothScroll(e, item.href)}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>
</nav>
