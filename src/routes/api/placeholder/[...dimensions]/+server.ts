import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const dimensions = params.dimensions;
	
	if (!dimensions) {
		throw error(400, 'Dimensions required');
	}
	
	// Parse dimensions (e.g., "400/400" or "600/400")
	const [width, height] = dimensions.split('/').map(Number);
	
	if (!width || !height || width > 2000 || height > 2000) {
		throw error(400, 'Invalid dimensions');
	}
	
	// Create a simple SVG placeholder
	const svg = `
		<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill="#f3f4f6"/>
			<rect x="20%" y="20%" width="60%" height="60%" fill="#e5e7eb" rx="8"/>
			<circle cx="40%" cy="40%" r="8%" fill="#d1d5db"/>
			<rect x="30%" y="55%" width="40%" height="4%" fill="#d1d5db" rx="2"/>
			<rect x="30%" y="62%" width="30%" height="4%" fill="#d1d5db" rx="2"/>
			<text x="50%" y="85%" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
				${width} × ${height}
			</text>
		</svg>
	`;
	
	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=31536000'
		}
	});
};
