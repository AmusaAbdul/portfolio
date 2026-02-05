import About from './Pages/About';
import Projects from './Pages/Projects';   
import Contact from './Pages/Contact';       
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import BtnUp from "./BtnUp";
import { about, education, projects} from "../data"




function Content() {
    return(
        <>
            <div id='about'>
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
            <div id='projects'><Projects projects={projects} /></div>
            <div id='contact'><Contact /></div>
            <div id='skills'><Skills /></div>   
            <div id='education'>
                {education.map(educate => (
                    <Education
                        key={educate.id}
                        title={educate.title}
                        degree={educate.degree}
                        courseWork={educate.courseWork}
                    />
                ))}
            </div>
            <BtnUp />
        </>
    )
}


export default Content;