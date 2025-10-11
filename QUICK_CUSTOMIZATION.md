# Quick Customization Guide

## 🚀 5-Minute Setup

### 1. Update Your Information (2 minutes)

**File: `src/routes/+page.svelte`**

```typescript
// Line 18-32: Change these values
const portfolioData = {
  name: "Alex Developer",           // ← Your name here
  valueProposition: "Full-Stack Developer & UI/UX Designer", // ← Your title
  subHeadline: "I create beautiful, functional digital experiences...", // ← Your tagline
  bio: {
    paragraph1: "I'm a passionate full-stack developer...", // ← Your bio
    paragraph2: "When I'm not coding, you'll find me..."    // ← More about you
  },
  contact: {
    email: "alex.developer@example.com",  // ← Your email
    phone: "+1 (555) 123-4567",          // ← Your phone
    location: "San Francisco, CA"         // ← Your location
  }
};
```

### 2. Add Your Projects (2 minutes)

**File: `src/lib/components/Projects.svelte`**

```typescript
// Line 4-40: Replace with your projects
export let projects = [
  {
    id: 1,
    title: "Your Project Name",                    // ← Project title
    description: "Brief project description",      // ← What it does
    image: "/api/placeholder/600/400",            // ← Project screenshot
    tags: ["React", "Node.js", "MongoDB"],       // ← Technologies used
    liveUrl: "https://your-project.com",          // ← Live demo link
    githubUrl: "https://github.com/you/project", // ← GitHub repo
    caseStudy: {
      overview: "What you built and why",        // ← Project overview
      challenge: "Problems you solved",          // ← Challenges faced
      solution: "How you solved them",           // ← Your approach
      results: "Impact and outcomes"             // ← Results achieved
    }
  }
  // Add 2-3 more projects following the same structure
];
```

### 3. Update Your Skills (1 minute)

**File: `src/lib/components/Skills.svelte`**

```typescript
// Line 2-40: Customize your skills
export let skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript (ES6+)",  // ← Add/remove skills
      "React",              // ← Your frontend skills
      "Vue.js",
      // ... add more
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",           // ← Your backend skills
      "Python",
      "PostgreSQL",
      // ... add more
    ]
  }
  // Add more categories as needed
];
```

## 🎨 Quick Visual Changes

### Change Color Scheme

**Primary Color (Blue → Your Color):**
1. Find all instances of `blue-600`, `blue-700`, `blue-100`, etc.
2. Replace with your preferred color (e.g., `purple-600`, `green-600`)
3. Common files to update:
   - `src/lib/components/Navigation.svelte`
   - `src/lib/components/Hero.svelte`
   - `src/lib/components/About.svelte`
   - `src/lib/components/Contact.svelte`

### Add Your Photo

**Replace placeholder with your headshot:**
1. Add your photo to `static/images/headshot.jpg`
2. In `src/lib/components/About.svelte`, change:
   ```typescript
   export let imageUrl = "/images/headshot.jpg"; // ← Your photo path
   ```

### Update Social Links

**Files: `src/lib/components/Hero.svelte` and `src/lib/components/Contact.svelte`**

```typescript
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile', // ← Your LinkedIn
    icon: '...' // Keep the icon path
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',     // ← Your GitHub
    icon: '...' // Keep the icon path
  }
  // Add more social links as needed
];
```

## 📸 Adding Real Images

### Project Images
1. Add images to `static/images/projects/`
2. Update project `image` field: `"/images/projects/project1.jpg"`

### Profile Photo
1. Add to `static/images/profile.jpg`
2. Update About component `imageUrl` prop

## 🚀 Deploy in 1 Minute

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `build` folder to Netlify
3. Done!

## 🔧 Common Customizations

### Remove a Section
Comment out the component in `src/routes/+page.svelte`:
```svelte
<!-- <Skills /> -->
```

### Add a New Section
1. Create new component in `src/lib/components/`
2. Import and add to `src/routes/+page.svelte`

### Change Navigation Items
Edit `navItems` array in `src/lib/components/Navigation.svelte`

---

**That's it!** Your portfolio is ready to go. The design is fully responsive and optimized for all devices.
