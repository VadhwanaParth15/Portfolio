import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrxptl7', 'template_rcgsfwp', form.current, 'jc3SeOOSRHn3Pe5bg')
      .then((result) => {
        console.log(result.text);
        setPopupMessage('Message Sent Successfully');
        form.current.reset();  // Reset the form
        setShowPopup(true);  // Show the popup
        setTimeout(() => setShowPopup(false), 3000);  // Hide the popup after 3 seconds
      }, (error) => {
        console.log(error.text);
        setPopupMessage('Failed to send message. Please try again.');
        setShowPopup(true);  // Show the popup
        setTimeout(() => setShowPopup(false), 3000);  // Hide the popup after 3 seconds
      });
  };

  return (
    <section id='contact'>
      <h5 data-aos="zoom-in-up" data-aos-duration="1300">Get In Touch</h5>
      <h2 data-aos="zoom-in-up" data-aos-duration="1300">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>parthvadhwana15@gmail.com</h5>
            <a href="mailto:parthvadhwana15@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8141070420</h5>
            <a href="https://api.whatsapp.com/send?phone=+918141070420">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
          <input type="text" name='email' placeholder='Your Email' required data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
          <textarea name="message" rows="7" placeholder='Your Message' required data-aos="fade-up" data-aos-anchor-placement="top-bottom"></textarea>
          <button type='submit' className='btn btn-primary' data-aos="fade-up" data-aos-anchor-placement="top-bottom">Send Message</button>
        </form>
        {showPopup && (
          <div className="popup-message">
            {popupMessage}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
