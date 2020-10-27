import * as React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';


const Zoom = require('react-reveal/Zoom')

const MyProjects = [
    {
        name: "Code Basix",
    },
    {
        name: "Xolo Books",
    },
    {
        name: "Pawel Jaskolski",
    },
    {
        name: "Fix-It-Fernando",
    },
];

const ProjectsComp: React.FC<IProjectsCompProps> = (props) => {
    const [name, setName] = React.useState<string>('My Projects')

    const handleClick = async (e: any) => {
        setName(e.target.textContent)
    }

    return (
        <Zoom top>
            <div className="mb-3 sticky-top">
                <Navigation />
            </div>
            <Layout>

                <main className="container h-100">
                    <div className="row d-flex justify-content-center mobile-text display-4 font-weight-lighter text-center mb-3">
                        <Typical
                            steps={["", 1000, `${name}`, 500]}
                            loop={1}
                            wrapper="p"
                        />
                    </div>
                    <div className="row d-flex justify-content-center font-weight-lighter text-center">
                        {MyProjects.map(project => (
                            <ProjectCard key={project.name} project={project} click={handleClick} />
                        ))}
                    </div>
                </main>
            </Layout>
        </Zoom>
    )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
  }    

.borderHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 15px rgba(33,33,33,.2);
    transition: 0.5s;
}

`

export interface IProjectsCompProps { }

export default ProjectsComp;