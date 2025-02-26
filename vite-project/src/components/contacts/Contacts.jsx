import React, { useRef, useState } from 'react';
import './Contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send message'); // State for button text

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("Sending..."); // Update button text while sending

    emailjs
      .sendForm(
        'service_pqq6a3o',     // Your Service ID
        'template_ulgmt5i',    // Your Template ID
        form.current,          // Form reference
        '7rNtiNLwejtkVCn4R'    // Your Public Key (User ID)
      )
      .then(
        () => {
          setButtonText("Sent!"); // Update button text to "Sent!" on success
          setTimeout(() => setButtonText("Send message"), 3000); // Reset button text after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText("Send message"); // Reset button text if there’s an error
        }
      );
  };

  return (
    <section id='Contacts'>
      <h5>LETS MAKE HISTORY TOGETHER</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className='contact__option'> 
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ritanoblejane@gmail.com</h5>
            <a href="mailto:ritanoblejane@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </div>
          <div className='contact__option'> 
            <BsWhatsapp />
            <h4>WHATSAPP</h4>
            <h5>+2349061532436</h5>
            <a href="https://wa.me/2349061532436" target='_blank' rel="noopener noreferrer">Send a DM</a>
          </div>
          <div className='contact__option'> 
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>NOBLE DANIEL</h5>
            <a href="https://m.me/100013446570698&mibextid=ZbWKwL&_rdc=1&_rdr" target='_blank' rel="noopener noreferrer">Send a DM</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>{buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
