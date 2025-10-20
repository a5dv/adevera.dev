<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isScrolled = false;
	let isDarkMode = true; // Default to dark mode

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

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
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
		// Initialize theme - default to dark mode
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'light') {
			isDarkMode = false;
			document.documentElement.classList.remove('dark');
		} else {
			// Default to dark mode
			isDarkMode = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm'
		: 'bg-transparent'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo/Name -->
			<div class="flex-shrink-0">
				<a
					href="#home"
					class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					on:click={(e) => smoothScroll(e, '#home')}
				>
					A5DV
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
							on:click={(e) => smoothScroll(e, item.href)}
						>
							{item.label}
							<span
								class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"
							></span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Theme Toggle -->
			<div class="hidden md:block">
				<button
					on:click={toggleTheme}
					class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
					aria-label="Toggle theme"
				>
					{#if isDarkMode}
						<!-- Moon icon for dark mode -->
						<svg class="w-5 h-5 text-gray-700 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					{:else}
						<!-- Sun icon for light mode -->
						<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
						</svg>
					{/if}
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center gap-2">
				<!-- Theme Toggle for Mobile -->
				<button
					on:click={toggleTheme}
					class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
					aria-label="Toggle theme"
				>
					{#if isDarkMode}
						<!-- Moon icon for dark mode -->
						<svg class="w-5 h-5 text-gray-700 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					{:else}
						<!-- Sun icon for light mode -->
						<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
						</svg>
					{/if}
				</button>

				<button
					on:click={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
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
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
					on:click={(e) => smoothScroll(e, item.href)}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>
</nav>
