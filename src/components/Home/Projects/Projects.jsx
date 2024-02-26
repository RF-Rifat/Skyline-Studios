import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 px-10 lg:px-32 bg-black">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
