import "@/styles/contact.styles.scss";

import React from "react";

import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

// import arrowIcon from "@/assets/images/arrowIcon.png";
import arrowIconOrange from "@/assets/images/arrowIcon_orange.png";
import linkedinlogo from "@/assets/images/linkedinlogo.svg";
import colorLinkedinlogo from "@/assets/images/color-linkedinLogo.png";
import { AlertDialogSlide } from "@/components/submit-dialog";

export const ContactComponent: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const refForm = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleDialogOpen();

    const serviceID = "service_yocwclr";
    const templateId = "template_e6gr0rq";

    const apikey = "jG9b04QC3D3Gamq6_";

    if (refForm.current) {
      emailjs
        .sendForm(serviceID, templateId, refForm.current, apikey)
        .then((result) => console.log(result.text))
        .catch((error) => console.error(error));
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <>
      <Element id="contact-anchor" name="contact-anchor">
        <div className="contact-section-container">
          <hr className="sections-hr" />
          <span className="sections-title">CONTACT</span>

          <div className="contact-container">
            <div className="contact-linkedin">
              <p style={{ margin: "0" }}>Contact me via</p>
              <a
                href="https://linkedin.com/in/albertos2c"
                target="_blank"
                rel="noopener"
                className="contact-linkedin-link"
                style={{
                  fontSize: "32px",
                  width: "fitContent",
                }}
              >
                Linked
                <div className="contact-linkedin-flip-images">
                  <img src={linkedinlogo} width={38} alt="linkedin textlogo" />
                  <img src={colorLinkedinlogo} width={68} alt="linkedin logo" />
                </div>
              </a>
            </div>
            <div>
              <p>or send me a message</p>
              <img
                src={arrowIconOrange}
                width={36}
                style={{ rotate: "90deg" }}
                alt="down arrow"
              />
            </div>

            <form
              className="form-container"
              ref={refForm}
              action=""
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Name"
                type="text"
                title="username"
                name="username"
                required
              />

              <input
                placeholder="Email"
                type="email"
                title="email"
                name="email"
                required
              />

              <textarea
                placeholder="Message"
                name="message"
                title="message"
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Element>

      <AlertDialogSlide open={isDialogOpen} handleClose={handleDialogClose} />
    </>
  );
};
