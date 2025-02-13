import TitleContainer from "./components/(Title)/Container";
import ExperienceContainer from "./components/(Experience)/Container";
import ProjectsContainer from "./components/(Projects)/Container";
import LessonLearnContainer from "./components/(LessonLearn)/Container";
import EndingContainer from "./components/(Ending)/Container";

import "./styles/reset.scss";
import "./styles/main.scss";

export default function Page() {
  return (
    <>
      <TitleContainer />
      <ExperienceContainer />
      <ProjectsContainer />
      <LessonLearnContainer />
      <EndingContainer />
    </>
  );
}
