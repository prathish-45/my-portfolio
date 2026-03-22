import { projectsData } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";


const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsData.map ((project) => (
                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    techStack={project.techStack}
                    githubLink={project.gitHubLink}
                />
            ))
            }
        </div>
    );
}

export default ProjectGrid;