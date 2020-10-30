import * as React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';


const Zoom = require('react-reveal/Zoom')

const MyProjects = [
    {
        id: 1,
        name: "Xolo Books",
        description: "Xolo Books is an aspiring independent online bookstore based in the Washington D.C metropolitan area.",
        projectUrl: "https://www.xolobooks.com/"
    },
    {
        id: 2,
        name: "Light and Dark Theme",
        description: "This project is develped with ReactJS and styled-components library to showcase the use of light and dark theme. It also incorporates MailGun and back-end database for projects tab.",
        projectUrl: "https://damp-headland-11870.herokuapp.com/"
    },
    {
        id: 3,
        name: "One Page Website",
        description: "This project was inspired by inifinte scroll and uses zero routers. The views are creaed by hrefs and id's. It is build with ReactJS, AWS S3 along with various styling libraries.",
        projectUrl: "https://floating-retreat-73992.herokuapp.com/"
    },
    {
        id: 4,
        name: "Fix-It-Fernando",
        description: "Fix-It-Fernando is a website created using ReactJS, Bootstrap and AWS S3 services for a local constryction company.",
        projectUrl: '',
        status: " - UNDER CONSTRUCTION"
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
                    <div className="row">
                        <div className="col-md-8">
                            {MyProjects.map(project => (
                                <ProjectCard key={project.name} project={project} click={handleClick} />
                            ))}
                        </div>
                        <div className="col-md-4 logo"></div>
                    </div>
                    <div className="row d-flex justify-content-center font-weight-lighter text-center">
                        <Link to="/codebasix">CodeBasics</Link>
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
  .home {
    width: 250px;
    height: 300px;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.logo {
    text-align: center;
    background-image: url('https://news-api.s3.us-east-2.amazonaws.com/codeBasix-NoBG.png');
    background-size: contain;
    background-position: 50% 0;
    background-repeat: no-repeat;
    height: 500px;
}

`

export interface IProjectsCompProps { }

export default ProjectsComp;