import * as React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical'
import styled from 'styled-components';


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
            <div className="mb-5">
                <Navigation />
            </div>
            <Layout>


                <main className="d-flex justify-content-center h-100">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="mobile-text display-2 font-weight-lighter text-center">
                                <Typical
                                    steps={["", 1000, `${name}`, 500]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            {MyProjects.map(project => (
                                <div key={project.name} className="col-md-4 mx-5">
                                    <div className="card" style={{ height: "18rem" }}>
                                        <div className="card-body">
                                            <div
                                                onClick={handleClick}
                                                className="card-title">{project.name}
                                            </div>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </Layout>
        </Zoom>
    )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 576px) {
      font-size: 50px;
    }
  }    

`

export interface IProjectsCompProps { }

export default ProjectsComp;