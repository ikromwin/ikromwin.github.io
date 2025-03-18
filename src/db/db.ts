interface CProject {
  title: string;
  tools: string;
  sourse: string;
  href: string;
}
interface SProject {
  title: string;
  tools: string;
  sourse: string;
  href: string;
}

export const currentProjects: CProject[] = [
  {
    title: "Movie app",
    tools: "TypeScript, React.js, React-Query (Tanstack)",
    sourse: "https://github.com/ikromwin/movie-app",
    href: "movie-app025.vercel.app",
  },
];

export const selectedProjects: SProject[] = [
  {
    title: "Financial Sheet",
    tools: "JavaScript, React.js",
    sourse: "https://github.com/uikromm/financial-sheet",
    href: "",
  },
  {
    title: "F-plus audit",
    tools: "Next.js, TypeScript, Sanity and SEO optimized",
    sourse: "",
    href: "https://www.f-plusaudit.uz/",
  },
  {
    title: "Contributed to AllGood e-commerce website",
    tools: "JavaScript",
    sourse: "",
    href: "https://allgood.uz/o-nas",
  },
  {
    title: "Chayxanshik.uz",
    tools: "JavaScript",
    sourse: "",
    href: "https://chayxanshik.uz/",
  },
];
