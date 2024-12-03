import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import "./Home.css"

const Home = () => {
    return ( 
        <main>
            <Hero />
            <Projects />
            <Skills/>
        </main>
     );
}
 
export default Home;