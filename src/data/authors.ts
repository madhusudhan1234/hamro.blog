export interface Author {
	id: number;
	name: string;
	avatar: string;
	bio: string;
	role: string;
}

export const authors: Author[] = [
	{
		id: 1,
		name: "John Doe",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
		bio: "Full Stack Developer with 5+ years of experience in React and Node.js",
		role: "Full Stack Developer",
	},
	{
		id: 2,
		name: "Jane Smith",
		avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		bio: "Frontend Developer specializing in TypeScript and React",
		role: "Frontend Developer",
	},
	{
		id: 3,
		name: "Mike Johnson",
		avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		bio: "UI/UX Designer and CSS Expert",
		role: "UI/UX Designer",
	},
	{
		id: 4,
		name: "Sarah Williams",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
		bio: "Backend Developer with expertise in Node.js and MongoDB",
		role: "Backend Developer",
	},
	{
		id: 5,
		name: "David Brown",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		bio: "DevOps Engineer and Cloud Architect",
		role: "DevOps Engineer",
	},
];

export const getAuthorById = (id: number) =>
	authors.find((author) => author.id === id);
