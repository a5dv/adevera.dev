<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { onMount } from 'svelte';

	// Smooth scrolling behavior
	onMount(() => {
		// Add smooth scrolling to the entire document
		document.documentElement.style.scrollBehavior = 'smooth';

		return () => {
			document.documentElement.style.scrollBehavior = 'auto';
		};
	});

	// Portfolio data - customize these values
	const portfolioData = {
		name: "Adrian Carlos A. de Vera",
		valueProposition: "Fullstack Software Engineer",
		subHeadline: "4 years of experience specializing in scalable applications in AWS environments. Expert in JavaScript/TypeScript ecosystem and architecting complex, real-time event-driven systems.",
		bio: {
			paragraph1: "I'm a proficient engineer with 4 years of experience specializing in the design and implementation of scalable applications in AWS environments. My expertise spans the JavaScript/TypeScript ecosystem (React, Node.js) and architecting complex, real-time event-driven systems that process over 100,000 transactions daily.",
			paragraph2: "Currently working as a Fullstack Software Engineer where I lead teams in developing cloud-native microservice architectures. I also act as a Technical Consultant, where I translate business concepts into technical roadmaps and build scalable platforms from the ground up."
		},
		contact: {
			email: "adr.cadv@gmail.com",
			phone: "+639274161009",
			location: "Philippines"
		}
	};
</script>

<svelte:head>
	<title>{portfolioData.name} - Portfolio</title>
	<meta name="description" content="{portfolioData.name} - {portfolioData.valueProposition}. {portfolioData.subHeadline}" />
	<meta name="keywords" content="fullstack engineer, software engineer, javascript, typescript, react, nodejs, aws, microservices, payment systems, adrian de vera" />
	<meta name="author" content="{portfolioData.name}" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{portfolioData.name} - Portfolio" />
	<meta property="og:description" content="{portfolioData.valueProposition}. {portfolioData.subHeadline}" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="{portfolioData.name} - Portfolio" />
	<meta property="twitter:description" content="{portfolioData.valueProposition}. {portfolioData.subHeadline}" />
</svelte:head>

<!-- Navigation -->
<Navigation />

<!-- Main Content -->
<main class="relative">
	<!-- Hero Section -->
	<Hero
		name={portfolioData.name}
		valueProposition={portfolioData.valueProposition}
		subHeadline={portfolioData.subHeadline}
	/>

	<!-- About Section -->
	<About
		name={portfolioData.name}
		bio={portfolioData.bio}
	/>

	<!-- Projects Section -->
	<Projects />

	<!-- Skills Section -->
	<Skills />

	<!-- Contact Section -->
	<Contact
		email={portfolioData.contact.email}
		phone={portfolioData.contact.phone}
		location={portfolioData.contact.location}
	/>
</main>
