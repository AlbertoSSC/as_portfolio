import "@/styles/contact.styles.scss";

import React from "react";

import { Element } from "react-scroll";

// import arrowIcon from "@/assets/images/arrowIcon.png";
import arrowIconOrange from "@/assets/images/arrowIcon_orange.png";
import linkedinlogo from "@/assets/images/linkedinlogo.svg";
import colorLinkedinlogo from "@/assets/images/color-linkedinLogo.png";
import { AlertDialogSlide } from "@/components/submit-dialog";

export const ContactComponent: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleDialogOpen();

    try {
      const response = await fetch("../api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleDialogOpen();
        console.log("Form Data:", formData);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }

    console.log("Form Data:", formData);
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
                  <img src={linkedinlogo} width={38} alt="linkedin logo" />
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
                alt="down arrow image"
              />
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Element>

      <AlertDialogSlide open={isDialogOpen} handleClose={handleDialogClose} />
    </>
  );
};
