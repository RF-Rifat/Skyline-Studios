import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="lg:px-6 xl:px-10 2xl:px-32 bg-black">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 pt-10">
          <ProjectCard />
          <ProjectCard margin={10} />
          <ProjectCard />
          <ProjectCard margin={10} />
          <ProjectCard />
          <ProjectCard margin={10} />
          <ProjectCard />
          <ProjectCard margin={10} />
        </div>
      </div>
    </>
  );
};

export default Projects;
