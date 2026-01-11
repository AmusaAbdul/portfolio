function Contact() {
    return(
        <section className="contact container card">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label htmlFor="name">Name</ label>
                <input type="text" className="name" required placeholder="Enter your name" />

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