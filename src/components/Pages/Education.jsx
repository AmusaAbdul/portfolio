function Education(props) {
    return(
        <main className="container">
        <section className="Education card">
            <h2>{props.title}</h2>
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