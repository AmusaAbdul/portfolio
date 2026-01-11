import { useState } from "react";

function Contact() {

    const [Name, setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
    }
    
    const trimmedName = Name.trim()

    if (trimmedName) {
        alert("Wagwan " + trimmedName + " Your message has been sent")
    }
    return(
        <section className="contact container card">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</ label>
                <input type="text" className="name" required placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="text" className="email" required placeholder="Enter your email" />

                <label for="message">Message</label>
                <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;