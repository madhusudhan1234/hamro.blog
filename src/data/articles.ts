import { authors, getAuthorById } from "./authors";

export interface Article {
	id: number;
	title: string;
	excerpt: string;
	content: string[];
	image: string;
	authorId: number;
	date: string;
	tags: string[];
	sourceUrl: string;
	featured: boolean;
}

export const articles: Article[] = [
	{
		id: 1,
		title: "Building Scalable Web Applications with React and Node.js",
		excerpt:
			"Learn how to build scalable web applications using React for the frontend and Node.js for the backend.",
		content: [
			"Building a web application that can grow with its user base takes more than picking a popular framework. It requires a clear separation of concerns between the frontend and backend, a data layer that can scale independently, and a deployment pipeline that keeps releases predictable.",
			"React gives us a component model that keeps the UI maintainable as the codebase grows, while Node.js lets the same team share tooling and language across the stack. Together, they make it easier to iterate quickly without sacrificing reliability.",
			"In this article we walk through the architecture decisions that mattered most: how we structured our API layer, how we handled caching, and how we kept our React components composable as new features were added.",
		],
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
		authorId: 1,
		date: "June 12, 2023",
		tags: ["React", "Node.js", "Web Development"],
		sourceUrl: "https://nepal-dev.com/blog/scalable-react-node-apps",
		featured: true,
	},
	{
		id: 2,
		title: "Getting Started with TypeScript: A Comprehensive Guide",
		excerpt:
			"TypeScript is a powerful superset of JavaScript that adds static typing to the language. This guide will help you get started with TypeScript.",
		content: [
			"TypeScript has become the default choice for teams building anything beyond a small script. Static typing catches whole categories of bugs before your code ever runs, and the editor tooling it unlocks makes refactoring far less risky.",
			"This guide covers the basics: setting up a project, understanding the type system, and gradually adopting TypeScript in an existing JavaScript codebase without a painful rewrite.",
			"We also look at common patterns like utility types, generics, and how to type third-party libraries that don't ship their own definitions.",
		],
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
		authorId: 2,
		date: "May 28, 2023",
		tags: ["TypeScript", "JavaScript", "Programming"],
		sourceUrl: "https://nepal-dev.com/blog/typescript-getting-started",
		featured: true,
	},
	{
		id: 3,
		title: "Mastering CSS Grid Layout: Tips and Tricks",
		excerpt:
			"CSS Grid Layout is a powerful tool for creating complex web layouts. Learn how to master it with these tips and tricks.",
		content: [
			"CSS Grid unlocked layouts that used to require hacks, extra markup, or JavaScript. With a two-dimensional model, you can define rows and columns together and let the browser handle the hard parts.",
			"This article walks through practical patterns: building a responsive gallery, aligning content inside a card, and combining Grid with Flexbox where each one shines.",
			"By the end, you'll have a set of reusable Grid recipes you can drop into your own projects.",
		],
		image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
		authorId: 3,
		date: "April 15, 2023",
		tags: ["CSS", "Web Design", "Frontend"],
		sourceUrl: "https://nepal-dev.com/blog/mastering-css-grid",
		featured: true,
	},
	{
		id: 4,
		title: "Introduction to Astro.js: The All-in-One Web Framework",
		excerpt:
			"Astro.js is a modern web framework that allows you to build faster websites with less client-side JavaScript.",
		content: [
			"Astro's biggest idea is shipping zero JavaScript by default. Pages are rendered to HTML at build time, and interactive components are hydrated only where they're actually needed.",
			"This makes Astro a great fit for content-heavy sites like blogs and marketing pages, where most of the page is static but a handful of widgets need interactivity.",
			"We cover the islands architecture, how to bring in React or Svelte components side by side, and how Astro's file-based routing keeps projects easy to navigate.",
		],
		image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
		authorId: 1,
		date: "June 20, 2023",
		tags: ["Astro.js", "Web Development", "JavaScript"],
		sourceUrl: "https://nepal-dev.com/blog/introduction-to-astro",
		featured: false,
	},
	{
		id: 5,
		title: "Understanding React Hooks: A Deep Dive",
		excerpt:
			"React Hooks are a powerful feature that allows you to use state and other React features without writing a class.",
		content: [
			"Hooks changed how React components are written by letting function components hold state and side effects. No more juggling `this`, class lifecycles, or wrapper components just to share behaviour.",
			"We dig into `useState` and `useEffect` first, then move on to writing custom hooks that encapsulate reusable logic across a codebase.",
			"Along the way we cover common pitfalls, like stale closures and dependency arrays, that trip up even experienced React developers.",
		],
		image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
		authorId: 2,
		date: "June 18, 2023",
		tags: ["React", "Hooks", "JavaScript"],
		sourceUrl: "https://nepal-dev.com/blog/understanding-react-hooks",
		featured: false,
	},
	{
		id: 6,
		title: "Building RESTful APIs with Express.js",
		excerpt:
			"Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
		content: [
			"Express keeps the essentials of building an HTTP server simple: routing, middleware, and request handling, without forcing an opinionated project structure on you.",
			"In this article we build a small RESTful API from scratch, covering route organization, input validation, and error handling middleware.",
			"We finish with a look at testing the API and preparing it for deployment.",
		],
		image: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=2070&auto=format&fit=crop",
		authorId: 3,
		date: "June 15, 2023",
		tags: ["Express.js", "Node.js", "API"],
		sourceUrl: "https://nepal-dev.com/blog/restful-apis-with-express",
		featured: false,
	},
	{
		id: 7,
		title: "CSS-in-JS: Styling React Components",
		excerpt:
			"CSS-in-JS is a styling technique where JavaScript is used to style components. Learn how to use it in your React applications.",
		content: [
			"CSS-in-JS libraries let you colocate styles with the components that use them, scoping class names automatically and enabling dynamic styles based on props.",
			"We compare a few popular approaches, weighing runtime cost against developer experience, and share guidance on when a CSS-in-JS library is worth reaching for.",
			"The article closes with a small component styled using this approach, from static styles to prop-driven variants.",
		],
		image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
		authorId: 4,
		date: "June 10, 2023",
		tags: ["CSS-in-JS", "React", "Styling"],
		sourceUrl: "https://nepal-dev.com/blog/css-in-js-styling-react",
		featured: false,
	},
	{
		id: 8,
		title: "Getting Started with Docker for Web Developers",
		excerpt:
			"Docker is a platform for developing, shipping, and running applications in containers. Learn how to use it in your web development workflow.",
		content: [
			"Containers solve the 'it works on my machine' problem by packaging an application together with everything it needs to run.",
			"We start with the basics of images and containers, then build a `Dockerfile` for a typical web application and wire it up with `docker-compose` for local development.",
			"The article wraps up with tips on keeping images small and structuring a workflow that works well for a team.",
		],
		image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
		authorId: 5,
		date: "June 5, 2023",
		tags: ["Docker", "DevOps", "Web Development"],
		sourceUrl: "https://nepal-dev.com/blog/docker-for-web-developers",
		featured: false,
	},
	{
		id: 9,
		title: "Introduction to GraphQL: A Better Way to API",
		excerpt:
			"GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
		content: [
			"Unlike REST, GraphQL lets clients ask for exactly the data they need in a single request, which can cut down on over-fetching and the number of round trips to the server.",
			"We look at how to define a schema, write resolvers, and query the API from the client, along with tradeoffs to consider compared to a traditional REST API.",
			"The article ends with a discussion of caching and tooling in the GraphQL ecosystem.",
		],
		image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
		authorId: 1,
		date: "June 1, 2023",
		tags: ["GraphQL", "API", "Web Development"],
		sourceUrl: "https://nepal-dev.com/blog/introduction-to-graphql",
		featured: false,
	},
];

export const getArticleById = (id: number) =>
	articles.find((article) => article.id === id);

export const getArticlesByAuthor = (authorId: number) =>
	articles.filter((article) => article.authorId === authorId);

export const getArticleWithAuthor = (article: Article) => ({
	...article,
	author: getAuthorById(article.authorId)!,
});

export const getAuthorArticleCount = (authorId: number) =>
	articles.filter((article) => article.authorId === authorId).length;

export { authors };
