import React, { useState } from "react";
import emailjs from "emailjs-com";

import { Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import "./Contact.css";

function Contact() {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);



    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_kbdf9ls",
            "template_lkqrvsh",
            e.target, "user_JUVxhcLuVzF3gRBltflLy"
            )
            
        .then(
            (result) => {
                setSuccess(true);       
                setTimeout(() => {
                    setSuccess(false);
                }, 2500);
                document.querySelector("form").reset();
            },
            (error) => {
                setError(true);       
                setTimeout(() => {
                    setError(false);
                }, 2500);
                console.log(error.text);
            }
            );
    }
    return (
        <div className="contact">
        <form onSubmit={ sendEmail }>
            <input type="text" name="name" placeholder="Name" required/>
            
            <input type="text" name="email" placeholder="Email" required/>
        
            <textarea className="scrollbar__hidden" placeholder="Your message" name="message" required>
            </textarea>
            <Button type="submit">
                Send
            </Button>
        </form>
        <div className="contact__alert">
            {success && <Alert severity="success">
                <AlertTitle>
                    Success
                </AlertTitle>
                Message Sent.
            </Alert> }
        </div>
        <div className="contact__alert">
            {error && <Alert severity="error">
                <AlertTitle>
                    Error!
                </AlertTitle>
                Please try again.
            </Alert> }
        </div>
       
        </div>
    )
}

export default Contact;
