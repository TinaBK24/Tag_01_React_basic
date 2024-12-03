import "./project.css"

interface IProject{
    title: string,
    desc: string,
    techStack: string
}

const Project: React.FC<IProject> = (props) => {
    return ( 
        <div className="project">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>{props.techStack}</p>
        </div>
     );
}
 
export default Project;