import ProjectList from "./ProjectList.js"

export default function Projects(){
    return(
        <div style={{backgroundColor: '#f0f0f0',
        height: 'calc(100vh - 55.2px)',
        overflowY: 'scroll',
        fontFamily: 'Kanit',fontSize:"4em",padding:"50px"}}>
            <ProjectList/>
        </div>
    )
}