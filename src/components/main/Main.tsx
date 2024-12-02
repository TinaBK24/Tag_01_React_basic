import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./Main.css"

const Main = () => {
    return ( 
        <main>
            <Hero />
            <Projects />
            <Skills />
        </main>
     );
}
 
export default Main;