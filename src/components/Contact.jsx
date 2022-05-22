import React, {useState, useRef} from "react";
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactHead from "./ContactHead";
import emailjs from "emailjs-com";
import {Snackbar, Alert} from "@mui/material";

function Contact(){

    const form = useRef();
    const [open, setOpen] = useState(false);
    function handleClose(e){
        setOpen(false);
    }

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_g5qz39s', 'template_wpq99tc', form.current, "41gSZMs9E1wUCuP4k")
          .then((result) => {
              console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset();
            setOpen(true);
      };

    AOS.init({
        once: true,
        offset:200,
        duration:500
    });

    return(
        <section id="contact" className="contact">
            <ContactHead />
            <div className="contact-heading">
                <h1 data-aos="fade-right">Contact</h1>
                <hr data-aos="fade-right" data-aos-delay="200" />
            </div>
            <div className="contact-caption" data-aos="fade-left" data-aos-delay="300">
                <p>if you have a project in your mind....</p>
            </div>
            <form onSubmit={sendEmail} ref={form}className="form-container" data-aos="zoom-in-up" data-aos-delay="400">
                <input type="text" name="from_name" id="name" placeholder="Your Name" required/>
                <input type="email" name="reply_to" id="email" placeholder="Your Email" required/>
                <textarea  name="message" id="textarea" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit" className="form-button">Submit</button>
            </form>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message Sent Successfully!
                </Alert>
            </Snackbar>
        </section>
    );
}

export default Contact;