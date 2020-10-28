import * as React from 'react'
import styled from 'styled-components';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);

    return (
        <Layout>
            <div
                onClick={() => setShow2(!show2)}
                className="col-md-12 border my-2 borderHover font-weight-lighter">
                <div className="card-body">
                    <h5
                        onClick={props.click}
                        className="card-title my-auto">{props.project.name}
                    </h5>
                    <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                        <p className="card-text mt-2">{props.project.description}</p>
                        <a href={props.project.projectUrl} target="_blank" className="card-text">Visit {props.project.name} </a> <span> {props.project.status}</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const Layout = styled.div`

.showContent {
    height: 0px;
    width: 100%;
    display: block;
    opacity: 0;
    transition: height 2s, opacity 2s;
}

.showContent-active {
    height: 150px;
    opacity: 1;
}

.borderHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 15px rgba(33,33,33,.2);
    transition: 0.5s;
}

`

interface ProjectCardProps {
    project: any;
    click: any
}

export default ProjectCard;