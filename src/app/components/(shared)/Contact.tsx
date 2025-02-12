import Image from "next/image";
import { FunctionComponent } from "react";
import profilePic from "../../../public/images/introduce.jpg";

const Contact: FunctionComponent = () => {
  return (
    <>
      <div>
        아이콘
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h2>Github: </h2>
        <span>blabla</span>
      </div>
    </>
  );
};

export default Contact;
