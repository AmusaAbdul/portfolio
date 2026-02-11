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
                <li>{props.school}</li>
                <ul>
                    <li> <strong>Coursework:</strong> {props.courseWork}</li>
                </ul>
                    <li> <strong>Focus:</strong> {props.focus}</li>
            </ul>
        </section>
        </main>
    )
}

export default Education