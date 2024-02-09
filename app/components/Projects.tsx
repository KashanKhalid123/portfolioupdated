import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "/public/amazonClone.png";
import cyberBlog from "/public/cyberBlog.png";
import dashboard from "/public/dashboard.png";
import Image from "next/image";
import ProjectCard from "./ProjectCart";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com../"
        />
        
        <ProjectCard
          img={cyberBlog.src}
          title="Cyber Security"
          link="https://blog.reactbd.com../"
        />
        
        

        <ProjectCard
          img={dashboard.src}
          title="Dashboard"
          link="https://orebishopping.reactbd.com../"
        />
      </div>
    </div>
  );
};

export default Projects;