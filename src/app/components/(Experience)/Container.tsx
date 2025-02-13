import { FunctionComponent } from "react";
import Activities from "./Activities";
import Works from "./\bWorks";
import Skills from "./Skills";

const ExperienceContainer: FunctionComponent = () => {
  return (
    <div className="experience-container">
      <div className="experience-top-box">
        <Activities />
        <Works />
      </div>
      <Skills />
    </div>
  );
};

export default ExperienceContainer;
