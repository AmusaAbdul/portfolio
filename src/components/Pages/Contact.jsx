import { useState } from "react";
import Typewriter from "typewriter-effect";


function Contact() {

    const [name, setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const trimmedName = name.trim()

        if (trimmedName) {
            alert("Hello " + trimmedName + " Your message has been sent")
        }
    }
    return(
        <main id="contact" className="container">

        <section id="contact" className="contact  card ">
                <h2>
                    <Typewriter
                        options={{
                            strings: [
                                "Contact Me"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</ label>
                <input type="text" className="name" required placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="text" className="email" required placeholder="Enter your email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
        </main>
    )
}

export default Contact;