function Projects(props) {
    return (
        <section className="section container card">
            <h2>Recent Projects</h2>
            <div className="projects-grid">
                <article>
                    <h3>{props.name}</h3>
                    <p>{props.paragraph}</p>
                    <a href={props.link} target="_blank">View Projects</a>
                </article>
            </div>
        </section>
    )
}

export default Projects;