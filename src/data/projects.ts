export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	architecture?: string[];
	status: 'Live' | 'In Progress' | 'Planned';
	link?: string;
	repo?: string;
	year: number;
}

export const projects: Project[] = [
	{
		id: 'wh40k-analyzer',
		title: 'WH40k Tournament Analyzer',
		description:
			'Web application for analyzing Warhammer 40k competitive meta using tournament data from Best Coast Pairing. Evaluates army performance, win rates by mission type, and list composition analytics.',
		tags: ['Data Analysis', 'Web App', 'Competitive Gaming', 'Statistics'],
		architecture: [
			'Data ingestion from Best Coast Pairing (win/loss, points, missions, opponents, list composition)',
			'Mission-based role classification: Take and Hold, Purge the Foe, Disruption, Reconnaissance, Priority Assets',
			'Statistical analysis engine for win rates, consistency metrics, and mission-specific performance',
			'Aggregation pipeline for multi-mission tournament data',
			'Adaptive meta-game tracking across balance patches',
		],
		status: 'In Progress',
		year: 2026,
	},
	{
		id: 'luisdev-portfolio',
		title: 'LuisDev Portfolio',
		description:
			'Personal portfolio website built with Astro and Tailwind CSS. Fast, minimal, and designed to showcase projects and skills.',
		tags: ['Astro', 'Tailwind CSS', 'TypeScript', 'Portfolio'],
		status: 'Live',
		link: '/',
		year: 2026,
	},
];

export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
	return projects.filter((p) => p.status === status);
}
