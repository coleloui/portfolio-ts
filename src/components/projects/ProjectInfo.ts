export type ProjectEntry = {
	projName: string;
	minor: string;
	biograph: string;
	deployedLink?: string;
	github?: string;
	featured?: boolean;
	tech?: string[];
};

export const ProjectInfo: ProjectEntry[] = [
	{
		projName: 'FedRate',
		minor: 'Personal Project — Production Application',
		biograph:
			'Four-service Railway deployment: FastAPI backend, async scraper, MCP server, and React/Vite frontend — all wired together in a GitHub Actions dev→main CI/CD pipeline. The backend uses async SQLModel/asyncpg over PostgreSQL with 11 years of historical Fed rate data backfilled from the FRED API. Redis backs both the caching layer and slowapi rate limiting. The MCP server exposes rate data as callable agent tools. A Groq/Llama 3.3 70b endpoint powers the in-app chat, and the frontend ships a rate dashboard, yield-curve explorer, and chat interface.',
		deployedLink: 'https://fedrate-production.up.railway.app/explorer',
		github: 'https://github.com/coleloui/fedscrape-docker',
		featured: true,
		tech: ['FastAPI', 'MCP', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Railway', 'Groq / Llama 3.3']
	},
	{
		projName: 'Enduvo',
		minor: 'Full Stack Software Engineer',
		biograph:
			'TypeScript/React 3D application built on a CQRS architecture with strictly typed DTO/DBO contracts enforced end to end. Built a custom Claude MCP server for secure 3D asset delivery via pre-signed URLs, and a Figma MCP integration that cut design-to-deployment cycle time by roughly 50%. Contributed a SketchFab façade microservice and Mixpanel analytics integration across the platform.',
		tech: ['TypeScript', 'React', 'MCP', 'CQRS', 'Figma API', 'Mixpanel']
	},
	{
		projName: 'Icarus',
		minor: 'Waveform Entertainment — Front End Developer',
		biograph:
			'Next-gen deployable remote collaborative broadcast software for internal use. All company broadcasts from July 2022 ran on Icarus. Modular projects were deployed with Twitch OAuth user management — admins issued generated invites to operators. Bash scripts ensured zero-downtime updates on live projects.',
		tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Twitch OAuth']
	},
	{
		projName: 'Epic Physical Therapy',
		minor: 'Freelance Full Stack Developer',
		biograph:
			'Web application for Epic Physical Therapy giving patients and prospective clients clear visibility into company locations and services. Built on React with Material-UI, contact forms wired through AWS SES, data persisted in MongoDB Atlas, and deployed via Netlify and Cloudflare.',
		deployedLink: 'https://www.epic-pt.com/',
		tech: ['React', 'Material-UI', 'AWS SES', 'MongoDB Atlas']
	}
];
