import * as React from 'react';
import Navigation from '../components/Navigation';
import ProjectsComp from '../components/ProjectsComp';
const Zoom = require('react-reveal/Zoom')

const Projects: React.FC<IProjectsProps> = (props) => {

    return (
        <Zoom top>
            <div className="row h-100">
                <div className="col-md-12">
                    <div><ProjectsComp /></div>
                </div>
            </div>
        </Zoom>
    )
}

export interface IProjectsProps { }

export default Projects;