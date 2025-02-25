import Image from "next/image";
import profilePic from "../../../public/images/introduce.jpg";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement, { isFixed: boolean }>(({ isFixed }, ref) => {
  return (
    <div className={`contact-container ${isFixed ? "fixed" : "sticky"}`} ref={ref}>
      <div className="contact-box">
        {/* <Image src={profilePic} alt="introduce" width={20} height={20} /> */}
        <h5>Email. </h5>
        <span>dev.blackiris@gmail.com</span>
      </div>
      <div className="contact-box">
        {/* <Image src={profilePic} alt="introduce" width={20} height={20} /> */}
        <h5>Github. </h5>
        <span>
          <a href="https://github.com/anyl92" target="_blank" rel="noopener noreferrer">
            github.com/anyl92
          </a>
        </span>
      </div>
      <div className="contact-box">
        {/* <Image src={profilePic} alt="introduce" width={20} height={20} /> */}
        <h5>Blog. </h5>
        <span>
          <a href="https://improvisation.tistory.com" target="_blank" rel="noopener noreferrer">
            improvisation.tistory.com
          </a>
        </span>
      </div>
      {/* <div className="contact-box">
        <Image src={profilePic} alt="introduce" width={20} height={20} />
        <h5>Resume. </h5>
        <span>linklinklinklinklink</span>
      </div> */}
    </div>
  );
});

export default Contact;
