# Portfolio Website

A modern, responsive portfolio website built with SvelteKit and TailwindCSS.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Modular Components**: Easy to customize and extend
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Smooth Scrolling**: Enhanced navigation experience
- **Case Study Modals**: Detailed project showcases
- **Contact Integration**: Direct email and social links

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte    # Top navigation bar
│   │   ├── Hero.svelte         # Hero section with CTA
│   │   ├── About.svelte        # About me section
│   │   ├── Projects.svelte     # Projects grid with modals
│   │   ├── Skills.svelte       # Skills categorized lists
│   │   ├── Contact.svelte      # Contact section
│   │   └── index.ts           # Component exports
│   └── utils/
│       └── scrollUtils.ts      # Scroll utilities
├── routes/
│   ├── +page.svelte           # Main portfolio page
│   ├── +layout.svelte         # App layout
│   └── api/placeholder/       # Placeholder image API
└── app.css                    # Global styles
```

## 🎨 Customization

### 1. Personal Information

Edit the `portfolioData` object in `src/routes/+page.svelte`:

```typescript
const portfolioData = {
	name: 'Your Name',
	valueProposition: 'Your Title/Role',
	subHeadline: 'Your value proposition...',
	bio: {
		paragraph1: 'Your first bio paragraph...',
		paragraph2: 'Your second bio paragraph...'
	},
	contact: {
		email: 'your.email@example.com',
		phone: '+1 (555) 123-4567',
		location: 'Your City, State'
	}
};
```

### 2. Projects

Update the `projects` array in `src/lib/components/Projects.svelte`:

```typescript
export let projects = [
	{
		id: 1,
		title: 'Project Name',
		description: 'Project description...',
		image: '/path/to/image.jpg',
		tags: ['React', 'Node.js', 'MongoDB'],
		liveUrl: 'https://your-project.com',
		githubUrl: 'https://github.com/you/project',
		caseStudy: {
			overview: 'Project overview...',
			challenge: 'What challenges did you face?',
			solution: 'How did you solve them?',
			results: 'What were the results?'
		}
	}
	// Add more projects...
];
```

### 3. Skills

Modify the `skillCategories` array in `src/lib/components/Skills.svelte`:

```typescript
export let skillCategories = [
	{
		title: 'Category Name',
		skills: ['Skill 1', 'Skill 2', 'Skill 3']
	}
	// Add more categories...
];
```

### 4. Social Links

Update social links in `src/lib/components/Hero.svelte` and `src/lib/components/Contact.svelte`:

```typescript
const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/yourprofile',
		icon: 'SVG_PATH_HERE'
	}
	// Add more social links...
];
```

### 5. Images

Replace placeholder images with your own:

- Profile photo: Update `imageUrl` prop in About component
- Project images: Update `image` field in projects array
- Add images to `static/` folder and reference them

### 6. Colors & Styling

The portfolio uses TailwindCSS. Main color scheme:

- Primary: `blue-600` (can be changed throughout components)
- Background: `gray-50`, `white`, `gray-900`
- Text: `gray-900`, `gray-700`, `gray-600`

To change the color scheme, find and replace color classes in components.

### 7. Fonts

The portfolio uses Inter font. To change:

1. Update the font import in `src/app.css`
2. Modify the `font-family` property

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎯 SEO & Performance

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Meta descriptions and Open Graph tags
- Optimized images and lazy loading
- Minimal JavaScript bundle

## 🚀 Deployment

### Cloudflare Pages (Recommended)

The portfolio is pre-configured for Cloudflare Pages deployment with the `@sveltejs/adapter-cloudflare` adapter.

#### Prerequisites

- Wrangler CLI installed and authenticated
- Cloudflare account

#### Important Notes

- If you have uncommitted changes in your git repository, use the `--commit-dirty=true` flag
- The deployment scripts in `package.json` already include this flag for convenience

#### Deployment Steps

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**

   ```bash
   npx wrangler pages deploy .svelte-kit/output/client --project-name adevera-dev --commit-dirty=true
   ```

   > **Note**: The `--commit-dirty=true` flag is needed if you have uncommitted changes in your git repository.

3. **Set up custom domain (optional)**
   - Go to Cloudflare Dashboard → Pages → Your Project
   - Navigate to "Custom domains" tab
   - Add your domain (e.g., `adevera.dev`)
   - Update DNS records as instructed

#### Automated Deployment

For continuous deployment, you can set up GitHub integration:

1. **Connect GitHub repository**
   - Go to Cloudflare Dashboard → Pages
   - Click "Connect to Git"
   - Select your repository

2. **Configure build settings**

   ```
   Build command: npm run build
   Build output directory: .svelte-kit/output/client
   Root directory: /
   ```

3. **Environment variables (if needed)**
   - Set any required environment variables in the Pages dashboard

#### Configuration Files

- `wrangler.toml` - Cloudflare Pages configuration
- `svelte.config.js` - Already configured with Cloudflare adapter

### Alternative Deployment Options

The portfolio can also be deployed to:

- **Vercel**: Change adapter to `@sveltejs/adapter-vercel`
- **Netlify**: Change adapter to `@sveltejs/adapter-netlify`
- **GitHub Pages**: Change adapter to `@sveltejs/adapter-static`
- **Any static hosting**: Use `@sveltejs/adapter-static`

### Current Deployment

🌐 **Live Site**: https://c44e7f8d.adevera-dev.pages.dev

The portfolio is currently deployed and accessible at the above URL.

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Need help customizing?** Check the component files for detailed prop interfaces and customization options.
