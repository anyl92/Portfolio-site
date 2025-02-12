import Image from "next/image";
import { FunctionComponent } from "react";
import Contact from "../(shared)/Contact";
import profilePic from "../../../public/images/introduce.jpg";

const TitleContainer: FunctionComponent = () => {
  return (
    <>
      <h2>YULIM AN</h2>
      <div>
        사진
        <Image src={profilePic} alt="introduce" width={200} height={200} />
      </div>
      <Contact />
    </>
  );
};

export default TitleContainer;
