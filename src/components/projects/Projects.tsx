import Project from "../project/project";
import "./Projects.css"

const Projects = () => {
    return ( 
        <section className="projects-container">
            <h2>PROJECTS</h2>
            <article>
                <Project title="Project 1" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, delectus." techStack="JavaScript React Sass"/>
                <Project title="Project 2" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, delectus." techStack="JavaScript React Sass"/>
                <Project title="Project 3" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, delectus." techStack="JavaScript React Sass"/>
            </article>
        </section>
     );
}
 
export default Projects;