import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "../../styles/Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactHeader />
      <div className="contact-content">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
