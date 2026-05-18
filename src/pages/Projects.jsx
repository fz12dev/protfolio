import Card from "../components/Card";

function Projects() {
    const projects = [
        {
            index: "01",
            title: "Portfolio Website",
            category: "Creative Development — 2026",
            image: "/images/_ai_agency.png",
            live: "https://fzdev-ai-agency.vercel.app/",
            github: "https://github.com/fz12dev/fzdev-ai-agency",
        },
        {
            index: "02",
            title: "Real Estate Landing Page",
            category: "UI Development — 2026",
            image: "/images/_architecture.png",
            live: "https://your-architecture-demo-link.com",
            github: "https://github.com/fz12dev/architecture-website",
        },
        {
            index: "03",
            title: "E-commerce Platform",
            category: "Frontend Engineering — 2026",
            image: "/images/_jewellery.png",
            live: "https://your-jewellery-demo-link.com",
            github: "https://github.com/github/fz12dev/jewellery-ecommerce",
        }
    ];

    return (
        <div className="flex flex-col gap-12 md:gap-24 w-full">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    index={project.index}
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    live={project.live}
                    github={project.github}
                />
            ))}
        </div>
    );
}

export default Projects;