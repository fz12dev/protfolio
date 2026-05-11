import Card from "../components/Card";

function Projects() {
    const projects = [
        {
            title: "Jewellery E-Commerce",
            desc: "Modern jewellery shopping website built with React, Tailwind CSS and responsive design.",
            image: "/images/_jewellery.png",
            live: "https://your-jewellery-demo-link.com",
            github: "https://github.com/fz12dev/jewellery-ecommerce",
        },
        {
            title: "Architecture Website",
            desc: "Elegant architecture and interior design website with modern UI and smooth animations.",
            image: "/images/_architecture.png",
            live: "https://your-architecture-demo-link.com",
            github: "https://github.com/fz12dev/architecture-website",
        },
        {
            title: "Medical Website",
            desc: "Healthcare website featuring clean layout, responsive sections and professional design.",
            image: "/images/_medicine.png",
            live: "https://your-medical-demo-link.com",
            github: "https://github.com/fz12dev/medical-website",
        },
        {
            title: "AI Agency Website",
            desc: "Modern AI agency landing page with smooth animations, responsive design, and clean UI built using React and Tailwind CSS.",
            image: "/images/_ai_agency.png",
            live: "https://fzdev-ai-agency.vercel.app/",
            github: "https://github.com/fz12dev/fzdev-ai-agency",
        }
    ];

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    live={project.live}
                    github={project.github}
                />
            ))}
        </div>
    );
}

export default Projects;