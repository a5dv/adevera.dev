/**
 * Smooth scroll to a target element
 */
export function smoothScrollTo(target: string | Element, offset: number = 80) {
	const element = typeof target === 'string' ? document.querySelector(target) : target;
	
	if (!element) return;
	
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - offset;
	
	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
}

/**
 * Intersection Observer for scroll animations
 */
export function createScrollObserver(
	callback: (entries: IntersectionObserverEntry[]) => void,
	options: IntersectionObserverInit = {}
) {
	const defaultOptions: IntersectionObserverInit = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
		...options
	};
	
	return new IntersectionObserver(callback, defaultOptions);
}

/**
 * Add scroll reveal animation to elements
 */
export function addScrollReveal(elements: NodeListOf<Element> | Element[]) {
	const observer = createScrollObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-fade-in-up');
				observer.unobserve(entry.target);
			}
		});
	});
	
	elements.forEach((element) => {
		element.classList.add('opacity-0', 'translate-y-8');
		observer.observe(element);
	});
	
	return observer;
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;
	return function (this: any, ...args: Parameters<T>) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

/**
 * Get current scroll progress (0-1)
 */
export function getScrollProgress(): number {
	const scrollTop = window.pageYOffset;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	return Math.min(scrollTop / docHeight, 1);
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, offset: number = 0): boolean {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= -offset &&
		rect.left >= -offset &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
	);
}
