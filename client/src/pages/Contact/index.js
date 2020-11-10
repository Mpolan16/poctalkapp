import React from "react";

function Contact() {
    return (
        <>
        <h4 id="header">Contact</h4>
            <form id="contactBox" action="mailto:mailto:monicapolancofabian15@gmail.com" method="post" enctype="text/plain">
            <label for="name">Name</label>
            <input type="text" id="fname" name="name" placeholder=""/>
            <label for="lname">Email</label>
            <input type="text" id="emailentry" name="email" placeholder=""/>
            <label for="subject">Message</label>
            <textarea id="subject" name="subject" placeholder=""></textarea>
            <button className="waves-effect waves-light btn-small blue" type="submit">Send</button>
        </form>
        </>
    );
}

export default Contact;