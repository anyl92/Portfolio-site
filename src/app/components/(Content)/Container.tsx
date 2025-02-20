import { forwardRef } from "react";
import ExperienceContainer from "../(Experience)/Container";
import ProjectsContainer from "../(Projects)/Container";
import LessonLearnContainer from "../(LessonLearn)/Container";

const ContentContainer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="content-container" ref={ref}>
      <ExperienceContainer />
      <ProjectsContainer />
      <LessonLearnContainer />
    </div>
  );
});

export default ContentContainer;
