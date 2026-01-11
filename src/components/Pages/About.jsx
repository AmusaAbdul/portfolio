function About(props) {
    return (
        <main className="main">
            <section className="about card">
                <h2>{props.header}</h2>
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