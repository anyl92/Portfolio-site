import Image from "next/image";
import profilePic from "../../../public/images/introduce.jpg";
import Keyword from "./Keyword";
import Contact from "../(shared)/Contact";

const TitleContainer = ({ contactRef, isFixed }) => {
  return (
    <div className="title-container">
      <div className="first-container">
        <h2 className="title-name">YULIM AN</h2>
        <div className="title-image-box">
          <Image src={profilePic} alt="introduce" width={240} height={240} />
        </div>
      </div>
      <Contact ref={contactRef} isFixed={isFixed} />
      <Keyword />
    </div>
  );
};

export default TitleContainer;
