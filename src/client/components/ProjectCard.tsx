import * as React from 'react'
import styled from 'styled-components';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);

    return (
        <Layout>
            <div
                onClick={() => setShow2(!show2)}
                className="col-md-8">
                <div className="card mb-3 borderHover rounded-0">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="..." className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5
                                    onClick={props.click}
                                    className="card-title">{props.project.name}
                                </h5>
                                <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
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
    height: 62px;
    opacity: 1;
}

`

interface ProjectCardProps {
    project: any;
    click: any
}

export default ProjectCard;