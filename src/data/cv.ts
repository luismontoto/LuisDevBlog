export interface Experience {
	company: string;
	role: string;
	period: string;
	description: string;
	technologies: string[];
}

export interface Education {
	institution: string;
	degree: string;
	period: string;
	description?: string;
}

export interface Skill {
	category: string;
	items: string[];
}

export interface CVData {
	name: string;
	title: string;
	summary: string;
	location: string;
	email: string;
	experience: Experience[];
	education: Education[];
	skills: Skill[];
	languages: { name: string; level: string }[];
}

export const cv: CVData = {
	name: 'Luis',
	title: 'Full-Stack Developer',
	summary:
		'Developer passionate about building scalable applications and solving complex problems with clean code. Experienced in full-stack development with a focus on data-driven applications.',
	location: 'Spain',
	email: 'luis@example.com',
	experience: [
		{
			company: 'Company Name',
			role: 'Full-Stack Developer',
			period: '2024 - Present',
			description:
				'Building web applications with modern technologies. Focus on performance, accessibility, and user experience.',
			technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
		},
		{
			company: 'Previous Company',
			role: 'Backend Developer',
			period: '2022 - 2024',
			description:
				'Developed APIs and backend services. Implemented data pipelines and analytics tools.',
			technologies: ['Python', 'FastAPI', 'MongoDB', 'Docker'],
		},
	],
	education: [
		{
			institution: 'University Name',
			degree: 'Computer Science',
			period: '2018 - 2022',
			description: 'Focus on software engineering and data structures.',
		},
	],
	skills: [
		{
			category: 'Languages',
			items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'],
		},
		{
			category: 'Frontend',
			items: ['Astro', 'React', 'Tailwind CSS', 'Vue', 'Svelte'],
		},
		{
			category: 'Backend',
			items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
		},
		{
			category: 'Tools & Other',
			items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Figma'],
		},
	],
	languages: [
		{ name: 'Spanish', level: 'Native' },
		{ name: 'English', level: 'Professional' },
	],
};
