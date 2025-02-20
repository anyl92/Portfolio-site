import Image from "next/image";
import profilePic from "../../../public/images/introduce.jpg";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement, { isFixed: boolean }>(({ isFixed }, ref) => {
  return (
    <div className={`contact-container ${isFixed ? "fixed" : "sticky"}`} ref={ref}>
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
});

export default Contact;
