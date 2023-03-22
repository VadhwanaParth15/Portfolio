import React, { useRef } from 'react'
import './contact.css'
import{MdOutlineMail} from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';


function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrxptl7', 'template_rcgsfwp', form.current, 'jc3SeOOSRHn3Pe5bg')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>parthvadhwana15@gmail.com</h5>
            <a href="mailto:parthvadhwana15@gmail.com">Send a Message</a>
          </artical>
          <artical className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8141070420</h5>
            <a href="https://api.whatsapp.com/send?phone=+918141070420">Send a Message</a>
          </artical>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default contact