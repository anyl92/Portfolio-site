import { FunctionComponent } from "react";
import ProjectsTitle from "./Title";
import ProjectsContents from "./Contents";

const ProjectsContainer: FunctionComponent = () => {
  return (
    <div className="projects-container">
      <ProjectsTitle />
      <ProjectsContents />
    </div>
  );
};

export default ProjectsContainer;
