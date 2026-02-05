import Typewriter from "typewriter-effect";

function About(props) {
    return (
        <main id="about" className="main">
            <section className="about card">
                <h2>
                    <Typewriter
                        options={{
                            strings: [
                                props.header
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h2>
                <p>{props.paragraph}</p>
                <ul>
                    <li>{props.email}</li>
                    <li>{props.phone}</li>
                </ul>
            </section>
        </main>
    )
}

export default About;