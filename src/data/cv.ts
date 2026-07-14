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
			company: 'LeanMind',
			role: 'Intern',
			period: 'Mar 2026 - Jul 2026',
			description: 'Internship experience.',
			technologies: [],
		},
	],
	education: [
		{
			institution: 'Ilerna, Sevilla',
			degree: 'Web Development',
			period: '2024 - 2026',
		},
		{
			institution: 'AnimationMentor, USA (online)',
			degree: '3D Cinema Specialization',
			period: '2020 - 2022',
		},
		{
			institution: 'EUSA, Sevilla',
			degree: '2D/3D Animation and Interactive Environment',
			period: '2018 - 2020',
		},
		{
			institution: 'University of Seville',
			degree: 'Industrial Design Engineering',
			period: '2011 - 2018',
			description: '60% of credits completed',
		},
		{
			institution: 'University of Seville',
			degree: 'Computer Engineering',
			period: '2010',
			description: 'First year',
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
