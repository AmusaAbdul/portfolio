import Typewriter from "typewriter-effect";


function Projects({projects}) {
    return (
        <main id="projects" className="container">
            <section id="projects" className="section  card">
                <h2>
                    <Typewriter
                        options={{
                            strings: [
                                "Recent Projects"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <article key={project.id}>
                            <h3>
                                <strong>📌</strong> {project.name}
                            </h3>

                            <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>
                                {project.summary}
                            </p>

                            <p>
                                <strong>Problem:</strong> {project.problem}
                            </p>

                            <p>
                                <strong>Solution:</strong> {project.solution}
                            </p>

                            <p>
                                <strong>Technologies:</strong>{" "}
                                {project.technologies.join(", ")}
                            </p>

                            <h4>Key Learnings:</h4>
                            <ul>
                                {project.learnings.map((learning, index) => (
                                    <li key={index}>{learning}</li>
                                ))}
                            </ul>

                            <button
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                Live Demo
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
        
    )
}

export default Projects;