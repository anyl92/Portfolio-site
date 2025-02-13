import Image from "next/image";
import { FunctionComponent } from "react";
import profilePic from "../../../public/images/introduce.jpg";
import Keyword from "./Keyword";
import Contact from "../(shared)/Contact";

const TitleContainer: FunctionComponent = () => {
  return (
    <div className="title-container">
      <h2 className="title-name">YULIM AN</h2>
      <div className="title-image-box">
        <Image src={profilePic} alt="introduce" width={240} height={240} />
      </div>
      <Contact />
      <Keyword />
    </div>
  );
};

export default TitleContainer;
