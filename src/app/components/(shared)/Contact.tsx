import Image from "next/image";
import { FunctionComponent } from "react";
import profilePic from "../../../public/images/introduce.jpg";

const Contact: FunctionComponent = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h5>Email. </h5>
        <span>linklinklinklinklink</span>
      </div>
      <div className="contact-box">
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h5>Github. </h5>
        <span>linklinklinklinklink</span>
      </div>
      <div className="contact-box">
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h5>Blog. </h5>
        <span>linklinklinklinklink</span>
      </div>
      <div className="contact-box">
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h5>Resume. </h5>
        <span>linklinklinklinklink</span>
      </div>
    </div>
  );
};

export default Contact;
