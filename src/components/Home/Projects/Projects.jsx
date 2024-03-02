import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-32 bg-black">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
