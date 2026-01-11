import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import {about, education, projects} from "../data"
import Footer from "./Footer";

function RoutePages() {
    return (
        <>
            <Header />

            <Routes>
            
                <Route path="/about" 
                    element={
                        <div>
                            {about.map(abouts => (
                                <About
                                    key={abouts.id}
                                    header={abouts.header}
                                    paragraph={abouts.paragraph}
                                    email={abouts.email}
                                    phone={abouts.phone}
                                />
                            ))}
                        </div>
                    }
                />
                <Route path="/projects" 
                    element={
                        <div>
                            {projects.map(proj => (
                                <Projects
                                    key={proj.id}
                                    name={proj.name}
                                    paragraph={proj.paragraph}
                                    link={proj.link}
                                />
                            ))}
                        </div>
                    }
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" 
                    element={
                        <div>
                            {education.map(educate => (
                                <Education
                                    key={educate.id}
                                    title={educate.title}
                                    degree={educate.degree}
                                    courseWork={educate.courseWork}
                                />
                            ))}
                        </div>
                    }
                />

            </Routes>

      
            <Footer />

        </>
    );
}

export default RoutePages;
