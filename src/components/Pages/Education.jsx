import Typewriter from "typewriter-effect";


function Education(props) {
    return(
        <main id="education" className="container">
        <section className="Education card">
            <h2>
                    <Typewriter
                        options={{
                            strings: [
                                props.title
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h2>
            <ul>
                <li>{props.degree}</li>
                <ul>
                    <li>{props.courseWork}</li>
                </ul>
            </ul>
        </section>
        </main>
    )
}

export default Education