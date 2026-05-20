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
        },
        {
            index: "04",
            title: "Brew Haven",
            category: "Coffee Shop Website — 2026",
            image: "/images/_brew_haven.png",
            live: "https://brew-haven-pearl.vercel.app/",
            github: "https://github.com/fz12dev/brew_haven",
        },
        {
            index: "05",
            title: "FitTrack Web App",
            category: "Fitness Tracking Platform — 2026",
            image: "/images/_fittrack.png",
            live: "https://v0-fittrack-web-app.vercel.app/",
            github: "https://github.com/fz12dev/v0-fittrack-web-app",
        },
        {
            index: "06",
            title: "Tattoo Design Tool",
            category: "Interactive Design Application — 2026",
            image: "/images/_tattoo_design_tool.png",
            live: "https://tattoo-design-tool.vercel.app/",
            github: "https://github.com/fz12dev/tattoo-design-tool",
        },
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