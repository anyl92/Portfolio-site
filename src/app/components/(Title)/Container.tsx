import Image from "next/image";
import profilePic from "../../../public/images/introduce.jpg";
import Keyword from "./Keyword";
import Contact from "../(shared)/Contact";

const TitleContainer = ({ contactRef, isFixed }) => {
  return (
    <div className="title-container">
      <div className="first-container">
        <div className="title-image-box">
          <Image src={profilePic} alt="introduce" width={240} height={240} />
        </div>
        <h2 className="title-name">
          <div>안녕하세요.</div>
          <div>개발자 안유림입니다.</div>
        </h2>
        <Keyword />
      </div>
      <Contact ref={contactRef} isFixed={isFixed} />
    </div>
  );
};

export default TitleContainer;
